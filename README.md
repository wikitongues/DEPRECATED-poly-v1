#Wikitongues Development Outline
***

## What is Wikitongues?
Wikitongues is an international non-profit organization working to provide access to every language in the world.

We define access as a spectrum ranging from the first exposure to a language, all the way to fluency, through education. To validate our assumption that there is a thirst for new forms of language content, we designed a proof of concept to quickly prove the hypothesis that exposure to unique and remote languages is widely wanted. Through the tireless work of our dynamic network of volunteers, we’ve been able to make over 200 videos in currently 130 unique languages, both spoken and signed, healthy and endangered, available on our YouTube channel.

So how many languages are there in the world? Over our first year of operations, we’ve achieved exposure to just below 2% of all living languages in varying levels of depth, both through volunteer efforts and user submissions. Currently, there are around 7000 classified languages, with an unknowable number of unclassified languages.

Now that we’ve validated interest in the exposure level of access by measuring an increasing growth of views on our videos, we are keen to expand to our second tier of the access spectrum. Our first foray into education will benefit from all the learnings we’ve collected with regards to crowdsourcing and community.

##Objectives for a developer community
### What’s in it for Wikitongues
### What do developers want to get from it
### What technologies (TechStack) are we using?
  + [Node](https://nodejs.org/)
  + [Express](http://expressjs.com/)
  + [Mongo](https://www.mongodb.org/)/[Syncano](http://www.syncano.com/)
  + [Angular](https://angularjs.org/)/[Ember](http://emberjs.com/)
  + [D3](http://d3js.org/)/[Raphael](http://raphaeljs.com/)

### How do we do it?
### Communication channels
  + [Slack](http://www.wikitongues.slack.com)
  + [IRC](http://www.irchelp.org/)
  + [Gitter](https://gitter.im/wikitongues)
  
### Building our open source developer community
### Meetups

## Development Projects
[Homepage](www.wikitongues.org)

Run `$Grunt` on `localhost:9000`

[Explore](#videos) - [Branch](https://github.com/wikitongues/Ember-Homepage/tree/watch-page)

[Phrasebooks](#phrasebooks) - [Branch](https://github.com/wikitongues/Ember-Homepage/tree/poly-prototype)

### A Language Platform
We are a community of constant learners, curious in our pursuits to know more about our world. It is no surprise therefore that ideas and projects are infinite. With that in mind, we have dedicated most of our efforts towards a persistent platform accessible both on web browsers and native mobile apps.

This platform will facilitate two main objectives:

1. The exploration of our video content in greater depth
2. The creation and crowdsourcing of bilingual phrasebooks3.


These objectives describe our vision for a platform on which all languages may be used, and where speakers and signers may share their language with the world.

### Elements

#### User
A user will be able to make an account on which all his/her activity will be tracked. This includes:

+ Videos uploaded
+ Videos watched
+ Transcriptions added
+ Translations made
+ Tweaks to other people’s editable transcriptions/translations
+ Comments and comment threads

The ability to edit one’s profile with personal information such as:

+ Name
+ Profile picture
+ Bio
+ Location
+ Languages known
+ Writing systems known
+ Interface language

**_A note on interface language:
All text on Wikitongues should be translatable to any language._**


#### Videos
Video content is integral to Wikitongues and to any form of language content. The ability to fully immerse oneself into a language and the community around it is facilitated by the ability to:

+ Watch
+ Comment
+ Transcribe
+ Translate
+ Record
+ Upload

The ability to explore them based on multiple relationships including:

+ Language
+ Language country of origin
+ Writing system
+ Geneaology

A video contains the following information:

+ Author
+ Speaker or signer (May be same as author)
+ Date created
+ Location created
+ Tags (Used for themes or topics)
+ Languages used
+ Transcription
+ Transcription edit license (Anyone can edit, anyone can suggest, collaborators can edit, collaborators can suggest, only author can edit)
+ Transcription collaborators (If not video author)
+ Transcription last edited
+ Transcription history
+ Translation language
+ Translation
Comment license (Open, moderate or strict, disabled)


#### Phrasebooks
Phrasebooks represent a new approach to language access. Through them, users are able to learn and share knowledge of their language. The technology offers:

1. The ability to create bilingual phrasebooks with one source language and one target language. Each phrasebook has the following information:
    + Author
    + Date created
    + Location created
    + Release license (Free, subscription, single purchase)
    + Title
    + Tags (Used for themes or topics)
    + Banner (Image or video)
    + Edit license (Anyone can edit, anyone can suggest, collaborators can edit, collaborators can suggest, only author can edit)
    + Last edited
    + History
    + Collaborators
    + Comment license (Open, moderate or strict, disabled)
    + Source language
    + Target language
    + Phrases

2. The ability to track individual phrasebook analytics such as:
    + Views
    + Favorites
    + Shares
    + Embeds
3. Each phrase object
    +  Must contain:
        + Source string
        + Source writing system
        + Target string
        + Target writing system
	+ May contain:
		+ Audio
		+ Video
		+ Variations
4. The ability to translate a phrasebook into another language. Partial translations or drafts should be supported but unpublished until complete.
5. The ability to search for phrasebooks based on multiple criteria including:
    + Source language
	+ Target language
	+ Language (Fuzzy)
	+ Author
	+ Location created
	+ Near me
	+ Personal search terms
The ideal scenario for this content would be a phrasebook that could be translated between Mandarin and American Sign Language, for example.

#### Embeddable content
Phrasebooks should exist as embeddable widgets across the internet. Whether on blogs, websites or other platforms, our phrasebooks are able to be embedded and consumed.
#### Chat
The ability to contact available video and phrasebook authors and collaborators over video or text, as well as a users own friends and contacts.

### Data
#### Persistence
Both the phrasebooks and the videos share a persistent database of ontological language data. All references to a language refer to a unique language object with its ID and metadata.
#### Language keys
Language is an incredibly diverse and fluid subject matter. Therefore, the study of language is ever evolving as the languages themselves change. To address this, we rely on external standards maintained jointly by the International Standards Organization (ISO) and the Summer Institute for Language (SIL).
As a first stage, we just use ISO 639-3 standards as the unique keys.
At a second moment, we intend to develop composite unique ID keys for each language comprised of the language’s own ISO 639-3 ID and our own ID component. Additional research must yet be conducted to assess the stability and value of other ISO 639 codes as well as additional databases such as Glottolog. This allows for flexible IDing of languages that are not yet classified or identified under the ISO code.

There is certainly room to improve language standards.
#### Corpora and Machine Translations
All translation activities provide an important opportunity to capture and develop useful corpora. An open standard for corpus data should be developed, and we should be involved.
#### Ownership and access



