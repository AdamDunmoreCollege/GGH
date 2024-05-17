with import <nixpkgs> { };

mkShell {
  nativeBuildInputs = [
    pkg-config
  ];

  buildInputs = [
    bun
    nodePackages.firebase-tools
    nodejs_21
  ];
}
