/* global monogatari */

// デモ
// https://monogatari.io/demo/
// https://github.com/Monogatari/Demo

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'ヘルプ',
		subtitle: 'リンク集',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>ドキュメント</a> - あなたが知る必要があるすべて。</p>
			<p><a href='https://monogatari.io/demo/'>デモ</a> - 簡単なデモ。</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		//title: 'Welcome',
		//body: 'This is the Monogatari VN Engine',
		//icon: ''
		title: 'ようこそ',
		body: 'これはMonogatariで作成したテストゲームです',
		//body: '<a href="https://github.com/Monogatari/Monogatari">Monogatari Visual Novel Engine</a>です',
		icon: './assets/icons/icon_48x48.png'
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
    "開発者": {
        //"開発者": "ytyaru",
        "開発者": `<a href="https://ytyaru.github.io/" target="_blank" rel="noopener noreferrer">ytyaru</a><mpurse-send-button></mpurse-send-button><a href="https://ytyaru.github.io/Html.Mpurse.Api.20220517160403/setup.html" title="モナコインを使うには" target="_blank" rel="noopener noreferrer">？</a>`,
        //"開発者": `<a href="https://ytyaru.github.io/">ytyaru</a><a href="javascript:/*await*/ window.mpurse.sendAsset('MEHCqJbgiNERCH3bRAtNSSD9uxPViEX1nu', 'MONA', 0.114114, 'plain', 'Good job!')" title="投げモナする"><object data="./assets/monacoin/svg/coin-monar.svg" type="image/svg+xml" width="64" height="64"><object data="./assets/monacoin/png/64/coin-monar.png" type="image/png" width="64" height="64"></object></object></a>`,
    },
    "フリー素材": {
        "背景": `<a href="http://www.aj.undo.jp/material/bg/bg_material.html" target="_blank" rel="noopener noreferrer">（ｃ）安野譲</a>`,
        "立ち絵": `<a href="https://wataokiba.net/" target="_blank" rel="noopener noreferrer">わたおきば</a>`,
        "音楽": `<a href="http://ontama-m.com/ongaku_piano1.html" target="_blank" rel="noopener noreferrer">音楽の卵</a>`,
        "ボイス": `<a href="https://wingless-seraph.net/material-riyoukiyaku.html">ユーフルカ</a>`,
    }
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
    'piano1_miagerusora': 'ontama_piano1_miagerusora.mp3', // http://ontama-m.com/ongaku_piano1.html
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
    'やるじゃねぇか': 'kiyotaka/17_nekketsu_damage.ogg',
    //'yarujyaneeka': 'kiyotaka/17_nekketsu_damage.ogg',
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'room-night': 'house_room_weekly_apartment_c.jpg', // http://www.aj.undo.jp/material/bg/bg_material.html
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'ユイ',
		color: '#5bcaff',
                directory: 'yui',
                sprites: {
                    'normal': 'josei06-167x300.png', // https://wataokiba.net/%e7%b4%a0%e6%9d%90%e4%b8%80%e8%a6%a7/
                }
	},
        'k': {
            name: 'キヨタカ',
            color: '#ffca5b',
            directory: 'kiyotaka',
            sprites: {
                'normal': 'dansei01-167x300.png', // https://wataokiba.net/%e7%b4%a0%e6%9d%90%e4%b8%80%e8%a6%a7/
            }
        },
});

monogatari.script ({
	// The game starts here.
	'Start': [
                'play music piano1_miagerusora with loop',
		'show scene #f7f6f6 with fadeIn',
                'show scene room-night',
		'show notification Welcome',
		{
			'Input': {
				//'Text': 'What is your name?',
				'Text': 'あなたの名前は？',
                                'Default': '山田太郎',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
//		'y Hi {{player.name}} Welcome to Monogatari!',
                //'show character y normal at center with lightSpeedInLeft',
                'show character y normal at right with lightSpeedInRight',
                'show character k normal at left with fadeIn',
		'y こんにちは{{player.name}}さん<br>ようこそ Monogatari へ！',
		{
			'Choice': {
				'Dialog': 'y <a href="https://developers.monogatari.io/documentation/">ドキュメント</a>はもう読んだかしら？',
				'Yes': {
					'Text': 'はい',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'いいえ',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y でかしたわ！',
		'y あなたがどんな素晴らしいゲームを作るか楽しみね！',
//		'y Thats awesome!',
//		'y Then you are ready to go ahead and create an amazing Game!',
//		'y I can’t wait to see what story you’ll tell!',
//		'end'
                'jump story-1',
	],

	'No': [

		//'y You can do it now.',
		'y あらそうなの？<br>なら今すぐ読むといいわ',

		'show message Help',

		//'y Go ahead and create an amazing Game!',
		'y さあ、素晴らしいゲームを作りましょう！',
		//'y I can’t wait to see what story you’ll tell!',
		'y あなたがどんな物語を紡ぐのか楽しみにしてるわよ！',
		//'end'
                'jump story-1',
	],

        'story-1': [
            'k え、俺の出番なし？<br>これで終わり？<br>マジか……',
            'y いいえ？<br>続くから安心なさい',
            'k よかった',
            'y これは<a href="https://github.com/Monogatari/Monogatari" target="_blank" rel="noopener noreferrer">Monogatari</a><br>というツールで作成したの',
            'y HTML, CSS, JavaScriptで作成できるから好きにプログラムできるわよ',
            'k なんか難しそうだけどマスターしたら最強っぽい',
            'y そうよ<br>気に<ruby>食<rt>く</rt></ruby>わなければ自力で作ればいいのだわ',
            'k ま、それができないからツールを使ってるんだけどね',
            'y とにかくこの<a href="https://github.com/Monogatari/Monogatari" target="_blank" rel="noopener noreferrer">Monogatari</a>を使ってゲームを作るのよ！',
            'k いきなり言われてもな<br>何もわからないし',
            'y ひたすら<a href="file:///tmp/work/Monogatari.2.0.2.HelloWorld.20220726200136/documents/" target="_blank" rel="noopener noreferrer">ドキュメント</a>を読んで書いて動かして学びなさい！',
            'k それしかなさそうだね<br>日本語の情報もまるでないし',
            'y だから今、私がこうして手ほどきしてあげているでしょう？<br>感謝なさい',
            'k ざっす',
            'y ソースコードは<a href="https://github.com/ytyaru/Monogatari.2.0.2.HelloWorld.20220726200136" target="_blank" rel="noopener noreferrer">ココ</a>にあるわ<br>参考になさい',
            'play voice やるじゃねぇか',
            //'play voice yarujyaneeka',
            'k やるじゃねぇか',
            'y ちょっと、いきなり声ださないでよ',
            'k とにかくやれっていったじゃん',
            'y チッ',
            'k 態度悪っ',
            'y じゃ、あとはがんばって',
            'k あ、はい',
            'y おつかれさま',
            'end',
        ],
});
