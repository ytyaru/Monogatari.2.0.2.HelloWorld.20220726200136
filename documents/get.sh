#!/usr/bin/env bash
set -Ceu
#---------------------------------------------------------------------------
# Monogatariのドキュメントサイトが重いのでローカルにダウンロードして閲覧する
# CreatedAt: 2022-07-30
#---------------------------------------------------------------------------
Run() {
	THIS="$(realpath "${BASH_SOURCE:-0}")"; HERE="$(dirname "$THIS")"; PARENT="$(dirname "$HERE")"; THIS_NAME="$(basename "$THIS")"; APP_ROOT="$PARENT";
	cd "$HERE"
	wget -m -p -E -k -np https://developers.monogatari.io/documentation/
}
Run "$@"
