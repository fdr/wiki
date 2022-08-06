(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{286:function(e,a,t){"use strict";t.r(a);var n=t(13),r=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"almalinux-os-generic-cloud-cloud-init-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-os-generic-cloud-cloud-init-image"}},[e._v("#")]),e._v(" AlmaLinux OS Generic Cloud (cloud-init) image")]),e._v(" "),a("p",[e._v("The Generic Cloud image is a general purpose virtual machine image that\ncontains the "),a("a",{attrs:{href:"https://cloud-init.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cloud-init"),a("OutboundLink")],1),e._v(" package. During boot,\ncloud-init will take configuration options from cloud metadata and\ninitialize a system accordingly. This may include network\nconfiguration, user's SSH key pair installation, attaching storage devices, etc.")]),e._v(" "),a("h2",{attrs:{id:"download-and-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-and-verification"}},[e._v("#")]),e._v(" Download and verification")]),e._v(" "),a("p",[e._v("The AlmaLinux OS Generic Cloud image is available from our\n"),a("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirrors"),a("OutboundLink")],1),e._v(" and from the main AlmaLinux OS\nrepositories:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/",target:"_blank",rel:"noopener noreferrer"}},[e._v("x86_64"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8/cloud/aarch64/images",target:"_blank",rel:"noopener noreferrer"}},[e._v("arm64/aarch64"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"http://repo.almalinux.org/almalinux/8/cloud/ppc64le/images/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ppc64le"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"import-the-almalinux-os-pgp-public-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-the-almalinux-os-pgp-public-key"}},[e._v("#")]),e._v(" Import the AlmaLinux OS PGP public key")]),e._v(" "),a("p",[e._v("In order to verify a downloaded image you need to import the AlmaLinux OS PGP\npublic key first.")]),e._v(" "),a("p",[e._v("If you are using an AlmaLinux OS-powered system, you may skip the command\nbelow because you already have the key stored in the\n"),a("code",[e._v("/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux")]),e._v(" file. Otherwise, download the key:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ curl -s https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux -o RPM-GPG-KEY-AlmaLinux\n")])])]),a("p",[e._v("Print the key fingerprint:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ gpg --with-subkey-fingerprints RPM-GPG-KEY-AlmaLinux\ngpg: WARNING: no command supplied.  Trying to guess what you mean ...\npub   rsa4096 2021-01-12 [C] [expires: 2024-01-12]\n      5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8\nuid           AlmaLinux <packager@almalinux.org>\nsub   rsa3072 2021-01-12 [S] [expires: 2024-01-12]\n")])])]),a("p",[e._v("The fingerprint is "),a("code",[e._v("5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8")]),e._v(". If you see a\ndifferent fingerprint, it means you downloaded a compromised file. Please,\n"),a("a",{attrs:{href:"mailto:security@almalinux.org"}},[e._v("let us know")]),e._v(" a mirror from which you\ndownloaded the file, remove the file and retry the download from another\nmirror.")]),e._v(" "),a("p",[e._v("Next you need to import the key:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ gpg --import RPM-GPG-KEY-AlmaLinux\ngpg: key 488FCF7C3ABB34F8: public key "AlmaLinux <packager@almalinux.org>" imported\ngpg: Total number processed: 1\ngpg:               imported: 1\n')])])]),a("h3",{attrs:{id:"download-and-verify-the-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-and-verify-the-image"}},[e._v("#")]),e._v(" Download and verify the image")]),e._v(" "),a("p",[e._v("Download checksum file and its signature first:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ curl -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM -o CHECKSUM\n$ curl -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM.asc -o CHECKSUM.asc\n")])])]),a("p",[e._v("Verify the checksum file signature:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ gpg --verify CHECKSUM.asc CHECKSUM\ngpg: Signature made Thu 17 Jun 2021 10:50:03 AM UTC\ngpg:                using RSA key 51D6647EC21AD6EA\ngpg: Good signature from "AlmaLinux <packager@almalinux.org>" [unknown]\ngpg: WARNING: This key is not certified with a trusted signature!\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n     Subkey fingerprint: E53C F5EF 91CE B0AD 1812  ECB8 51D6 647E C21A D6EA\n')])])]),a("p",[e._v("Make sure that you see the "),a("code",[e._v('Good signature from "AlmaLinux <packager@almalinux.org>"')]),e._v("\nmessage in the output.")]),e._v(" "),a("p",[e._v("Download the latest image version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ curl -s https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/AlmaLinux-8-GenericCloud-latest.x86_64.qcow2 \\\n       -o AlmaLinux-8-GenericCloud-latest.x86_64.qcow2\n")])])]),a("p",[e._v("and verify its checksum:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sha256sum -c CHECKSUM 2>&1 | grep OK\nAlmaLinux-8-GenericCloud-latest.x86_64.qcow2: OK\n")])])]),a("p",[e._v("If the output is different, you should download the image again. Trying another\nmirror may be a good idea.")])])}),[],!1,null,null,null);a.default=r.exports}}]);