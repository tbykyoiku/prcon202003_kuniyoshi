/*
 * ツリーベル四日市事業所
 * 第3回PGコンテスト用ベースすごろくプログラム
 * マスイベント
 */

//更新履歴
//2020 1/16 和田 新規作成
const _events = [
			event_Pitfall
		];

function event_Pitfall() {
	writeMsg("落とし穴にハマった・・・。3マス戻る。");
	return playerMove(nowPlayerId,-3);
}
