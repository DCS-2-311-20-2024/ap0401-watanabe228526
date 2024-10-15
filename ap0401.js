//
// 応用プログラミング 第5回 課題1 (ap0501)
// G184002021 拓殖太郎
//
"use strict"; // 厳格モード

import * as THREE from 'three';
import GUI from 'ili-gui';
import { MeshPhongMaterial } from 'three';

// ３Ｄページ作成関数の定義
function init() {
  const param = { // カメラの設定値
    fov: 60, // 視野角
    x: 0,
    y: 25,
    z: 10,
    axes: false,
  };

  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  // ブロック数のカウント
  let nBlock = 0

  // スコア表示
  let score = 0;
  let life = 3;
  function setScore(score) {
  }

  // Geometry の分割数
  const nSeg = 24;
  const pi = Math.PI;

  // ボール ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ボールの作成
  const ballR = 0.3;
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(ballR, nSeg, nSeg),
    new THREE.MeshPhongMaterial({ color: 0x808080, shininess: 100, specular: 0xa0a0a0 })
  );
  scene.add(ball);

  // ボールの移動
  const vBall = new THREE.Vector3();
  let vx = Math.sin(pi / 4);
  let vz = -Math.cos(pi / 4);

  function moveBall(delta) {
  }

  // ボールの死活
  let ballLive = false;
  let speed = 0;

  // ボールを停止する
  function stopBall() {
  }

  // ボールを動かす
  function startBall() {
  }

  // マウスクリックでスタートする
  window.addEventListener("mousedown", () => {
    if (!ballLive) { startBall(); }
  }, false);

  // 外枠 ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // 枠の作成
  //   大きさの定義
  const hFrameW = 13;  const hFrameH = 2;  const hFrameD = 1;
  const vFrameW = 0.5;  const vFrameH = 1.2;  const vFrameD = 22;
  {
    //   上の枠
    const tFrame = new THREE.Mesh(
      new THREE.BoxGeometry(hFrameW, hFrameH, hFrameD),
      new THREE.MeshPhongMaterial({ color: 0x333333 })
    );
    tFrame.position.z = -(vFrameD + hFrameD) / 2;
    scene.add(tFrame);
    //   下の枠
    const bFrame = tFrame.clone();
    bFrame.position.z = (vFrameD + hFrameD) / 2;
    scene.add(bFrame);
    //   左の枠
    const lFrame = new THREE.Mesh(
      new THREE.BoxGeometry(vFrameW, vFrameH, vFrameD),
      new MeshPhongMaterial({ color: 0xB3B3B3 })
    );

    //   右の枠

  }

  // 壁で反射させる
  const hLimit = hFrameW / 2 - vFrameW;
  const vLimit = vFrameD / 2;
  function frameCheck() {
    // 右

    // 左

    // 上

    // 下

  }

  // パドル ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // パドルの作成
  const paddleR = 0.3;
  const paddleL = 1.5;
  const paddle = new THREE.Group(); // パドルグループ
  {
    // パドル中央
    const center = new THREE.Mesh(
      new THREE.CylinderGeometry(paddleR, paddleR, paddleL, nSeg),
      new THREE.MeshPhongMaterial({ color: 0x333333, specular: 0x404040 })
    );

    // パドル端
    const sideGeometry
      = new THREE.SphereGeometry(paddleR, nSeg, nSeg, Math.PI / 2, Math.PI);
    const sideMaterial
      = new THREE.MeshPhongMaterial({ color: 0x666666, specular: 0xa0a0a0 })
    // パドル端(右)

    // パドル端(左)

    // パドルの配置

  }
  

  // パドル操作
  {
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    const intersects = new THREE.Vector3();
    function paddleMove(event) {
  
    }
    window.addEventListener("mousemove", paddleMove, false);
  }

  // パドルの衝突検出
  function paddleCheck() {
  
  }

  // ブロック ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ブロックの生成
  const bricks = new THREE.Group();
  {
    const color = ["white", "red", "yellow", "blue", "purple", "green"];
    const param = {
      h: 0.8, /* ブロックの高さ */ d: 0.4, /* ブロックの奥行 */
      nRow: 6, /* ブロックの行数 */ nCol: 9, /* ブロックの列数 */
      gapX: 0.1, /* 横方向の隙間 */ gapZ: 0.3 /* 縦方向の隙間 */
    };
    // ブロックの幅
    param.w = (hFrameW - 2 * vFrameW - (param.nCol + 1) * param.gapX) / param.nCol;
    // ブロックを並べる

    // ブロック全体を奥に移動する

  }

  // ブロックの衝突検出
  function brickCheck() {
    let hit = false;

    bricks.children.forEach((brick) => {
    });
  }


  // ブロックの再表示
  function resetBrick() {

  }

  // 光源の設定
  const light = new THREE.SpotLight(0xffffff, 1800);
  light.position.set(0, 15, -10);
  scene.add(light);

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    param.fov, window.innerWidth / window.innerHeight, 0.1, 1000);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x305070);
  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement);

  // 描画更新
  const clock = new THREE.Clock(); // 時間の管理
  function render(time) {
    // カメラの再設定
    camera.fov = param.fov;
    camera.position.x = param.x;
    camera.position.y = param.y;
    camera.position.z = param.z;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    // 座標軸の表示
    axes.visible = param.axes;
    // ゲーム画面の更新
    let delta = clock.getDelta(); // 経過時間の取得
    frameCheck(); // 枠の衝突判定
    paddleCheck(); // パドルの衝突判定
    brickCheck(); // ブロックの衝突判定
    moveBall(delta); // ボールの移動
    setScore(score); // スコア更新
    // 再描画
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  // GUIコントローラ
  const gui = new GUI();
  gui.add(param, "fov", 10, 100);
  gui.add(param, "x", -40, 80);
  gui.add(param, "y", -40, 80);
  gui.add(param, "z", -40, 80);
  gui.add(param, "axes");
  gui.close();
  // 描画
  render();
}

// 3Dページ作成関数の呼び出し
init();
