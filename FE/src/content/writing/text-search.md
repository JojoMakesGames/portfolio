---
title: Text Search Optimization
publishDate: 2020-03-04 00:00:00
img: /assets/fast-search.jpg
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  Enabled Users to search a wide set of data quickly in Postgres.
tags:
  - Design Document
  - Dev
  - Learning
---


## Text Searching

#### Problem:

FE application that is filtering data on the client side, which resulted in a large amount of data existing
the FE. Lots of data == long load times.

#### Database text searching as a solution:

This is where database text searching can help reduce load. Instead of requesting a lot
of data up front, we can instead type in a search query to search the field at the
database level (i.e. querying something like "username" on a user table)
The "no-work-required" approach to this is to just emit a LIKE/ILIKE query and search
the assets table. This is not very good however as it performs poorly the more users added.

#### GIN time:

GIN (Generalized Inverted Index) indexes create a bitmap structure. This allows for
quick searching based off of search queries. There are 2 main ways to take advantage
of this indexing, each with different advantages/disadvantages.

##### Built in

First of all is using PSQL's built in text-searching features, which utilize the tsvector data
type. TSVectors are really neat as they store strings as separate tokens (lexemes in the
doc) and allow these to be easily searched. There's additional support that allows
similar words to match with the tokens stored. For example, if you stored "ride" it would
also match search queries that were looking for "rode" and "riding". This is configured
when searching using TSQuery, which is how you always will search these fields. This
allows for amazing searches on things such as description fields as there is often a lot
of text and not often memorized like things such as an asset's name. Using a TSvector
is faster than __LIKE__/__ILIKE__ if you are matching on full english words.

##### GIN Index

A GIN index can be added on top of the TSVector column to do exactly what you think it
would, it indexes it so it's easier to query, without the index it's just like any other
column. However, there are downsides to this approach. TSVectors will only match on
entire words, or additionally on prefixes. So if you wanted to find all terms that for
"bucket", your search query of "buck" would indeed match, but "cket" would not, as it
only matches on the beginnings of words (thus the prefix matching name).
An additional note is that tsvectors can be composite columns that would allow for
searching multiple columns worth of text. For example, "username" and "email" on
a users table could be combined to one tsvector column.

>But I want to match on ANY part of a word - Every dev, ever

Well you are in luck! There is another type of indexing which takes advantage of GIN
indexing and builds on top of it. First to introduce n-grams, but more specifically trigrams
as that is what psql supports. A trigram is a set of 3 tokens that create a larger
document, however for our purposes it's characters that compose a string (an n-gram
just being the same thing, but n can change to any integer). Additionally, each string is
considered to have two spaces prefixing it. So for instance "asset" would contain
trigrams of [" a", " as", "ass", "sse", "set"]. Now using these trigrams, you can compare
the similarity of words and match if a certain similarity threshold is met.
Now to introduce a GIN index on this. The GIN index will create the inverted index on
Text Searching3these trigrams and allow for LIKE/ILIKE queries to utilize the trigrams in order to make
them actually efficient queries. This is awesome as it allows for matching on any part of
a word. A downside to this approach is that the search query must be 3 characters long
at minimum to take advantage of the index. It also is a bit slower on updates to the
respective columns (data to come soon).

In general these queries for LIKE/ILIKE improve from 100+ ms (as bad as 1000+) to
something like 20ms or less. It's sweet.

Trigam indexes plus the psql TSVector implementations can be combined to improve
the prefix/word matching mentioned earlier to also include misspelled word matching
due to the similarity matching of trigrams.

About GIN indexes: https://www.postgresql.org/docs/9.5/gin-intro.html
About GIN index text-search: https://www.postgresql.org/docs/current/textsearch-
indexes.html
About Trigram Indexes/pg_trgm extension:
https://www.postgresql.org/docs/9.6/pgtrgm.html

