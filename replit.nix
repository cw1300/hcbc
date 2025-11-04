{ pkgs }: {
	deps = [
   pkgs.killall
   pkgs.imagemagick_light
		pkgs.clang
		pkgs.ccls
		pkgs.gdb
		pkgs.gnumake
	];
}