This bridge protocol must be compatible not only with other decentralized protocols, but also with more broadly used protocols like the ones that underlie the Web. Therefore, the IntPub protocol also offers a (somewhat) centralized handle system, which will resolve shorter IntPub URIs to longer, protocol-readable links. This handle system is analagous to the DOI (Digital Object Identifier) system. 

`intpub://h/<HANDLE>`

Note that the resolver is separate from the content/data layer. For most actions, there are two layers which involve resolving logic:

1. intpub:// and 
2. the content resolution layer (usually a decentralized storage or filesystem protocol like IPFS, DAT, Git, etc.)

`intpub://i:<VERSION_NUMBER>/<PROTOCOL>/<AUTHOR>:<LINK>`

## Multiformat Resolution

IntPub is a multiformat system, which allows people to define their own formats for resolution. The default resolution format is `i:<VERSION_NUMBER>`, which stands for "interplanetary". However, other resolution formats can be added. All resolution formats must fit the following schema: `<FORMAT_NAME>:<VERSION_NUMBER>` For example, if the University of Ganymede wanted to define their own resolution format, they could create one that looks like this: `UNIGMD:1.0.0`. Also note that, before using a custom format, the format must be whitelisted by the format user, and then the format definition must be downloaded from a trusted source. For most purposes, the default resolution format will be perfectly adequate.

## Authorship Consortia

Authorship consortia are created as a Stellar address that has signing keys from all the authors in the group and has adjusted thresholds to the desires of the groups.