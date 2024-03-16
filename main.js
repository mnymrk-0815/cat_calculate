'use strict'; {

  // 飲水量計算
  document.getElementById('calcWater').addEventListener('click', function () {

    let weight = document.getElementById('weight').value;
    let dry = document.getElementById('dry').value;
    let wet = document.getElementById('wet').value;
    let churu = document.getElementById('churu').value;

    if (weight === "" && dry === "" && wet === "" && churu === "") {
      alert('入力してください');
    } else {

       let needWater = Number(weight) * 60;

      dry = Number(dry) * 0.1;
      wet = Number(wet) * 0.8;
      churu = Number(churu) * 14 * 0.91;

      let Total = dry + wet + churu;
      let drink = needWater - Total;

      let pText = document.querySelector('.waterAnswer');
      pText.innerText = `あなたの猫ちゃんの必要水分摂取量は${needWater}ccです。\n今日の食事での水分摂取量は${Total}ccです。\n食事以外にあと${drink}cc必要です。`

    }
  });

  document.getElementById('waterClear').addEventListener('click', function () {
    document.form1.reset();
    document.querySelector('.waterAnswer').textContent = '';

  });

  // クイズ

  document.getElementById('quizAnswer').addEventListener('click', function () {
    if (document.form3.radio2.value === 'b') {
      document.querySelector('.correct').style.display = 'block';
    } else {
      document.querySelector('.wrong').style.display = 'block';
    }

  });

  document.getElementById('quizClear').addEventListener('click', function () {
    document.form3.reset();
    document.querySelector('.correct').style.display = 'none';
    document.querySelector('.wrong').style.display = 'none';
  });

  // カロリー

  document.getElementById('calcCarory').addEventListener('click', function () {

    let weight2 = document.getElementById('weight2').value;
    let carory = Number(weight2) * 30 + 70;
    let age = document.form2.radio1.value;

    switch (age) {
      case 'kitten':
        carory = 2.5 * carory;
        break;
      case 'OneToSix':
        carory = carory * 1.3;
        break;
      case 'SevenToTen':
        carory = carory * 1.2;
        break;
      case 'senior':
        carory = 1.1 * carory;
        break;
    }


    let p2Text = document.querySelector('.caroryAnswer');
    p2Text.innerText = `あなたの猫ちゃんの一日の必要摂取カロリーは${parseInt(carory)}kcalです。`;

  });

  document.getElementById('caroryClear').addEventListener('click', function () {
    document.form2.reset();
    document.form4.reset();
    document.querySelector('.caroryAnswer').textContent = '';

  });


  //フードの種類ごとにオブジェクトを作成し配列にしてセレクトボックスを生成

  const Kidney = [
    {
      name: "ロイヤルカナン腎臓サポート",
      gram: 100,
      carory: 100,
    },
    {
      name: "ヒルズ",
      gram: 100,
      carory: 90,
    },
    {
      name: "ピュリナ",
      gram: 100,
      carory: 90,
    },
    {
      name: "アニモンダ",
      gram: 100,
      carory: 90,
    },
    {
      name: "和の極み",
      gram: 100,
      carory: 90,
    },
  ];

  const complete = [
    {
      name: "ロイヤルカナン アダルト",
      gram: 80,
      carory: 80,
    },
    {
      name: "ヒルズ プリスクリプション・ダイエット",
      gram: 100,
      carory: 100,
    },
    {
      name: "ピュリナワン",
      gram: 100,
      carory: 90,
    },
    {
      name: "カルカン",
      gram: 100,
      carory: 90,
    },
    {
      name: "黒缶",
      gram: 100,
      carory: 90,
    },
  ];

  const general = [
    {
      name: "モンプチ",
      gram: 80,
      carory: 80,
    },
    {
      name: "焼津のまぐろ",
      gram: 100,
      carory: 100,
    },
    {
      name: "いなばチャオ",
      gram: 100,
      carory: 90,
    },
    {
      name: "銀のスプーン",
      gram: 100,
      carory: 90,
    },
    {
      name: "アイシアMiawMiaw",
      gram: 100,
      carory: 90,
    },
  ];

  const wet = [Kidney, complete, general];

  const foodtype = document.querySelectorAll('[name="foodtype"]');

  document.getElementById("form5").addEventListener("change", () => {
    foodtype.forEach((radio) => {
      if (radio.checked) {
        const n = radio.value;

        let select = document.querySelector('select[name ="wetfood"]');
        wet[n].forEach((element, index) => {
          //option要素を生成
          let option = document.createElement("option");
          //option要素のテキストを設定
          option.text = element.name;
          //option要素の値を設定
          option.value = index;
          //生成したoption要素をselect要素に追加
          select.add(option);
        });

//計算ボタンクリックでカロリーを計算        

        const btn = document.getElementById("btn-food");

        btn.addEventListener("click", () => {
          const wetFoodIndex = document.getElementById("wetfood").value;

          const gram = document.getElementById("gram").value;
          const result = wet[n][wetFoodIndex].carory * (gram / 100);
          document.getElementById("result").textContent = `今日食べたごはんのカロリーは${result}kcalです。`;
        });
      }
    });
  });

//　リセット  

  const foodReset = document.getElementById('btn-food-reset');
  const form5 = document.getElementById('form5')
  const resultText = document.getElementById('result');
  ;
  foodReset.addEventListener('click', () => {
    form5.reset();
    form6.reset();
    resultText.textContent = '';

    const options = document.querySelectorAll('#wetfood option');
    //  options.forEach(o => o.remove());
    options.forEach((element) => {
      element.remove();
    });
  });










































}