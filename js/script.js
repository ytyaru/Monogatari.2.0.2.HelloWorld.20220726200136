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
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
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
            color: 'ffca5b',
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
                'show character y normal at center with lightSpeedInLeft',
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
		'y すばらしいわね！',
		'y あなたがどんな素晴らしいゲームを作るか楽しみだわ！',
//		'y Thats awesome!',
//		'y Then you are ready to go ahead and create an amazing Game!',
//		'y I can’t wait to see what story you’ll tell!',
		'k え、俺の出番なし？<br>これで終わり？<br>マジか……',
		'end'
	],

	'No': [

		//'y You can do it now.',
		'y あらのそうなの？<br>なら今すぐ読むといいわ',

		'show message Help',

		//'y Go ahead and create an amazing Game!',
		'y さあ、素晴らしいゲームを作りましょう！',
		//'y I can’t wait to see what story you’ll tell!',
		'y あなたがどんな物語を紡ぐのか楽しみにしてますね！',
		'k え、俺の出番なし？<br>これで終わり？<br>マジか……',
		'end'
	]
});
