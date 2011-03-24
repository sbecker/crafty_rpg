window.onload = function() {
  // Start crafty
  Crafty.init(50, 400, 320);
  Crafty.canvas();

  // Turn the sprite map into usable components
  Crafty.sprite(16, "sprite.png", {
    grass1: [0,0],
    grass2: [1,0],
    grass3: [2,0],
    grass4: [3,0],
    flower: [0,1],
    bush1:  [0,2],
    bush2:  [1,2],
    player: [0,3]
  });

  // The loading screen that will display while our assets load
  Crafty.scene("loading", function() {
    // Load takes an array of assets and a callback when complete
    Crafty.load(["sprite.png"], function() {
      Crafty.scene("main"); //when everything is loaded, run the main scene
    });

    // Black background with some loading text
    Crafty.background("#000");
    Crafty.e("2D, DOM, text").attr({w: 100, h: 20, x: 150, y: 120})
      .text("Loading")
      .css({"text-align": "center"});
  });

  // Automatically play the loading scene
  Crafty.scene("loading");

};
