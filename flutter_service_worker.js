'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5aff11054563ef77a298cfa32fa8866b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "39b9f939ac33d71eed0b52bca43185d9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eb5a4f7aac87d489657470f80ac6f2e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c69e6c534d15bf6457465b8e76adfae",
".git/logs/refs/heads/main": "61805c02004444ec3d67d8d0ff7b49ce",
".git/logs/refs/remotes/origin/main": "fce8ba5cc37913e31019d8dd62025c39",
".git/logs/refs/remotes/origin/master": "1e22a2530014a1370a28cffc6ac78031",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/04/ca1ec836532322ec0ef75b6580672e3c9c6cc2": "cd93d0bf4e9ebcbd4ead876fd3a50767",
".git/objects/05/28dfc668e560f32391a82381cb03980f28d119": "e24f5e0f70a2efdc8941ccda76858139",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/44559e7332b83ab4e2a70504fe9b6de2606550": "aaeda5169e628e8b7ba8cb317acfdccf",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/11/1bac2664672d1572cb7c0a246fb1d24bc03100": "d5b2a9f700797e8355e8e3c483800b63",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/9962b657e1b7e41094ac8c039db042b79e8c12": "d5ba9a661ff4508c1bf80dd260b27ece",
".git/objects/1c/11ee419766ed8780f153e44a43eec2ffe45793": "8a73a66ccd28daa49f6567eee471f719",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/1c/2f3dd5424da400dd355e418d6118f6c60b74d2": "fd26ac95e5970faabe1736343ed4a053",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/79f9ccad6db509ad9834aa1693a932d208cb9f": "097cc02c815407e85c65db5f94fccc16",
".git/objects/23/a32efb8d8d468d7d90809f1e1b608a337b5ba5": "c23fb81d3e23b10c0256e3e69cc6beac",
".git/objects/23/fac5191d1bf518c1d70495e096b4396fcf411e": "fd8fc139193f7e5f4f270eb51ea6810e",
".git/objects/27/01aa603fff0fb69db62bd8e4e8fbf63a97c526": "2621af1001b165d2c7247f9a9ced24c5",
".git/objects/29/f77d0330b47edcc446cbc4b29eef68af29a323": "43fe59886cf5f5fdbcca813901892107",
".git/objects/2e/16432a4b3ba21556e4349b8a65e4877690cb22": "aabe05b4e1897eb7261993eb66e36393",
".git/objects/2e/777f8999a3ed7798b47f085265694a1917db0f": "3b44ffc4962d749188b6987eace93231",
".git/objects/2f/12b42ad2a0cf4da3ca26388573e9268f0f41f7": "ddf6d71ab45495f33cb0509bdc9c967f",
".git/objects/30/1b3912945f9416abfe8c39f779338b350f750b": "95386ea8ea6f07ce25c264ebe65b6b26",
".git/objects/32/61bab5cbf8e79e977aa1e9c1c74d868392b20a": "93b837e724ba41cdfe7d61cfc299554f",
".git/objects/35/0ab7c06b575e2276ac454f629d8c191c11ef58": "44bc116b7ef5ea4b5273450908494509",
".git/objects/35/5ad79109c668b77f516e8c2d3cf23247322fe8": "78626538032232744ee63e4c9f756d05",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3f/aed3e36a4c4e82d40978e61566d1e933c61f42": "f23fcfb77ae2158d16c217f8dcda95c1",
".git/objects/40/0c54765ee0dfdc36efa2d28a07a9ad011926ca": "586ec84e22b0361da88f04b450ae3e1c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/c7483cc33f097b2c84f12bcfaa8708bcbf5d87": "1f0509757866baa09413faec117f4c0d",
".git/objects/45/001860c55d1c30c67a6fcab3b3ce145d2d18f2": "1441a90c8d708618d45c851f8a0258f8",
".git/objects/45/0f33b29bd8536fb7d5bb3250ecd378dbfc8fbb": "8f25a5988bed06364c3e458cf7c793ed",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/45514106cdfac4eef898ecd3076874af563aeb": "02043b5e2a274d314eaae9a3e2c71c82",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/7dbd7d7bc9c5a73b684ac0145e4a042e66f761": "0f20424cae70a42d915f7ba4f2dca6fe",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/4e4519f7e600f3baa7a37a27607f9b701e59bf": "0f926e472b5500bea4ac055a3052bf7d",
".git/objects/61/e99555cbba8aefe3e5bb6922234462539df23f": "f253cd77c5c4b711187d100a4f529fcc",
".git/objects/62/1fca22549431a42d4a57c4180ffdd6f48be43d": "c7ba101475f61196cc23ce25647eaddd",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/2099f15b06d91c2a61c95c619de05a6db023e5": "d2daa3348b3e0c49bdc46ead9932b17a",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6a/cfa3f3b87306a1be975fc14ed34acc657fa8b5": "eecb981fb4d12031c0956d0ce3be5ba5",
".git/objects/6c/0244b5d0e4d07483636ccba6ed47072ee04d39": "31547d8cb8a7e1823b0576954d53fc29",
".git/objects/6c/ad67aeada3c8ca26136d9231086cb25a641ae6": "fd7d7d3e9c9fd717f30d40b13af8b99c",
".git/objects/6d/8b25ad4d8bc45c70548cb770ab3eed989c9466": "28cc9f7cc9f28df121073dc7d336002f",
".git/objects/6e/cfce58fec1cf83c630457d24c0834841c226e0": "ff2d6b980489b8e363b8380ee284ab35",
".git/objects/6f/c16acb703ce8d0ef189074e33db56d55ca8925": "1eae2b704ac432bbe86ceb7a549c48b1",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/4d3468274d136134118375f0b2cb14639e39f5": "31021be834a000c654fbd3c047ea1033",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/23bd49adca9a5fdf094088274005cde69ba44e": "2d6accaedf652f8e2925f1fe704678d1",
".git/objects/77/e997652a9e62f8fcf493af93ae250204f64cde": "427cc254845f40c373d25d3e14c03de7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/52002385b1391ff9b0ee47425d4528a4c4ef85": "6c6be08292f0c659d6cdb443c8dd27b0",
".git/objects/7c/d4f5eb1ca70ff74a577f8216898ce68d0049d6": "d0d23767b3d90b45ac2334b858e6ee28",
".git/objects/7d/f8775585eade9681a8e5960351db0b42f849de": "af01f9fecb50dcc57e3314ef7f27ede2",
".git/objects/7e/6b960473cf3039a95e688dfc23e567d91c33a4": "da381361bb5f318bb6e2f34d0e9c738f",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/54f19bc96d027eafea29c3de316651c5833648": "f492c767775980d435b5464a35699084",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6f2e4424e7d3fccff057dab9aa00ce89323308": "b7750af7e0ee076ccfd8db7bac835cbb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/79edba7502d9645e6201018c5416a721b38afd": "cbb4a16e21ec43a8327d70849b0563a5",
".git/objects/95/3b63f34c2a3bb94dd1b152faea08e0c9b2bdda": "f1db4066034fa89424844c7032ba981d",
".git/objects/9c/d8dc88e489dacb5524c3d2c8a219eda5a92089": "31cbb988941218007d5ba4ebdc235b91",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a6/a2a0f3b484abbb3ab6d573fbcff7e387976640": "781a69623b6aac30ef3bb11b7ba1c6ea",
".git/objects/a9/e910316b616d90e175492f6ff3dc4e067871b3": "a9e96ae11233ec8ab7496a888fdc3ecc",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ac/6344cbc49f9fbe46e70dd063516f713980e04e": "35b79090fa4f7e91eecdbeb28bc492e0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/7677eea9abb24db485eb16590252048f0850c0": "e55bf7492d880c66bb8fe3aeb5ea6fe5",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b5/3434399d23a5b4bb991c2f90efd92126e291af": "0c923a6eb77b7789ace3629df7f065af",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/45b689f1a22232c37a8985a15dfb07b7d54de8": "9a944b0953cd4914594e4a8c3b24266a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/bf/d8a168ce709caa1e9b8f5547dc331cb0adc52d": "7c653f7cd586f1877282e3dfef72a21e",
".git/objects/c0/c14d1e9a0a4d5ca255d2c7104f26b84546586a": "916b1a7e44d1b93664d3ec01010310b5",
".git/objects/c7/ea41e1a76b08821146032b1e8fdf9bedfe3193": "a0aead001b16b2ebda8d947f9d9434f7",
".git/objects/d1/4a3ca36e2a2ffc31d2efb194bcc7ab0e2af9f8": "5de146a1ebb138857fdc4c639d2c75e3",
".git/objects/d2/09c6ed4b78706243dc7bdd6aa6386e3017fc22": "a34ebbb3697918f32026d728e99a8859",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/b65b99845f50aabb33e0f0559c7721e46fc640": "55db785ce089e9b4354c3a4e1a5c2b43",
".git/objects/dc/73427390b3aa4db07604c4027548ca70e6f298": "6909874db0eef431513dce05033a0b7f",
".git/objects/e0/4590599d7bd63dd4dbb71c59eaf6866a97b4ed": "f0a31db2a8e8526b5a2907e223b4ee74",
".git/objects/e1/173cd7e2755cba29f529002be4ba4d49688753": "7764ba45bc93b54c07dbf1d5a1fda8dc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/ff2cf66063a4730b2e1df6312ca535b75d5b21": "55b94528fb31348119ec1614622f1990",
".git/objects/f0/1bbc966368f1a0d8bdd37f7c496faa7c41b6fc": "b030cd1d82f31b92e3d9db3767e3ad1e",
".git/objects/f0/5d3890599134faf62cc1da7c2e95cf28ceb44c": "67ebc826e004a5a9ed44b18bb3c30afe",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/b80b7e56077ec87bc431016c5eb5a344626b6a": "c324f62937285c055901e849c4f71339",
".git/objects/f6/729477a602344fed8b09c137b5e34cd5043e3c": "953973e67b6f6ef257322d7963d1b563",
".git/objects/f7/1dd13f9a67b16943c368c55b76bb4c5528ce2b": "e1c026c3b84ccff19440db6275ed2de6",
".git/objects/f8/551a354ff51bc64338249e4f34a15b11fba4dc": "7b397afb7bab37a8247eee8a544176fe",
".git/objects/fa/5f0a12877cbb561fe0f6712e3ab51e3663535c": "066269e893636c814bd95d1b6c61d99f",
".git/objects/fb/9329babe15d65149c8cee5c500139cdaeb7511": "25bb163a8534134a69c9144a98e8fa27",
".git/objects/fc/ef9ba9b666f97cb08b39a0bd6aa343250fe06e": "fc50ebceda619f8d056cc9a8424c2ee0",
".git/ORIG_HEAD": "ffa17689ed43453b151ca72726e92ca8",
".git/refs/heads/main": "2b4904aa92539e41e074465139ab1c4a",
".git/refs/remotes/origin/main": "2b4904aa92539e41e074465139ab1c4a",
".git/refs/remotes/origin/master": "51e8b29509950d3e93a619c25fe3cbcd",
"assets/AssetManifest.bin": "ab22e6dc0580f4fc1c19e776c2c50479",
"assets/AssetManifest.json": "70a24c4c24238178028ea32ca90ef5de",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "2a2cf79a861aecbd30199eb1a4203f35",
"assets/assets/icons/download-arrow.png": "e7f1976db00426bec19c54b4e651530a",
"assets/assets/icons/download.svg": "fef465cd6cb6f0afa7d62a3d62a55457",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/gmail.png": "63664b18d55ee67e3ca3b00994e051d9",
"assets/assets/icons/gmail.svg": "e20767db730670b12529c73cabac59e1",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/location.png": "cb6645c567f5376a0f56218cbd089035",
"assets/assets/icons/sms.png": "df18138a0550ef45f9d458acb614a246",
"assets/assets/icons/sms.svg": "968ae11e2999f7e7a4112ac243144b9e",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/whatsapp.svg": "b893a69c889ff47a64634f2243c4ece8",
"assets/assets/icons/youtube.svg": "6c3781437eadf78643698de65b648042",
"assets/assets/images/anna1.jpg": "47fc9c1b32ee7f71de1b9ea5191fe035",
"assets/assets/images/anna11.jpg": "8f86c183680966ab71705852de291f8a",
"assets/assets/images/anna2.jpg": "5982d78943d5b1a1a4cdc40fab557940",
"assets/assets/images/anna3.jpg": "e24585676ea15b263189a9dcfa8e8576",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/bts1.webp": "ec5f64068c6f07d40290e1e4c7d8d273",
"assets/assets/images/bts2.webp": "8f571773039787130d1744c66249caf9",
"assets/assets/images/bts3.webp": "113245e79df96f50f5e105f87181dff1",
"assets/assets/images/bts4.webp": "2f70f556b6a266583fb57e24f2480e5a",
"assets/assets/images/dorsett1.jpg": "d403dadb56f0aadd0411413d6d44c884",
"assets/assets/images/dorsett2.jpg": "cbbd21249790adbf10c564cdcdff2498",
"assets/assets/images/hrmn992.jpg": "5b176ac7ab2199416e430c9513ecddf3",
"assets/assets/images/IMG_7344.png": "af97296f90613829156af6b31fe38eb5",
"assets/assets/images/lbs.jpg": "78b7cb126f48a1c1b07648fa69c7bfeb",
"assets/assets/images/ss1.jpeg": "551600f8df02e1a3a8130906216667ad",
"assets/assets/images/ss2.jpeg": "63ea52445b79205f5c8a4e16b9975f15",
"assets/assets/images/ss3.jpeg": "bae78b229355893e485f227a18f09794",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bf3bcc7b6456e11036d0a02cb506289a",
"assets/NOTICES": "f1036ca0a70252159371b55f298af270",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c8e0e584ed191788d84bb43d41ecd0e3",
"/": "c8e0e584ed191788d84bb43d41ecd0e3",
"main.dart.js": "000d0a46dcde1b0336b330c7ac04d3cb",
"manifest.json": "14533758d5adebb52c270151b0335f00",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
