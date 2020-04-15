$(document).ready(function () {

    var finalpoint = 0;
    var i = 0;
    var Start = [];
    function Random() {
        var StartStr = "";
        for (var j = 0; j < 3; j++) {

            var k = Math.floor(Math.random() * 9) + 1;
            console.log(k);
            Start[j]=k;
            sw(k);
            StartStr += j == 0 ? k : "," + k;
            console.log(StartStr);

            $(".Start").html(StartStr);
        }
    }

    Random();

    function sw(k) {
        switch (k) {
            case 1: {
                change(".a1");
                break;
            }
            case 2: {
                change(".a2");
                break;
            }
            case 3: {
                change(".a3");
                break;
            }
            case 4: {
                change(".b1");
                break;
            }
            case 5: {
                change(".b2");
                break;
            }
            case 6: {
                change(".b3");
                break;
            }
            case 7: {
                change(".c1");
                break;
            }
            case 8: {
                change(".c2");
                break;
            }
            case 9: {
                change(".c3");
                break;
            }
        }
    }
    function change(className) {
        console.log("color:" + $(className).css("background-color"));

        if ($(className).css("background-color") == "rgb(255, 255, 255)") {
            $(className).css("background-color", "rgb(0,0,0)")
        } else {
            $(className).css("background-color", "rgb(255, 255, 255)")
        }

    }
    function a1Change() {
        change(".a1");
        change(".a2");
        change(".b1");
        i++;
    }

    function a2Change() {
        change(".a1");
        change(".a2");
        change(".a3");
        change(".b2");
        i++;
    }

    function a3Change() {
        change(".a2");
        change(".a3");
        change(".b3");
        i++;
    }

    function b1Change() {
        change(".a1");
        change(".b1");
        change(".b2");
        change(".c1");
        i++;
    }

    function b2Change() {
        change(".a2");
        change(".b1");
        change(".b2");
        change(".b3");
        change(".c2");
        i++;
    }

    function b3Change() {
        change(".a3");
        change(".b2");
        change(".b3");
        change(".c3");
        i++;
    }

    function c1Change() {
        change(".b1");
        change(".c1");
        change(".c2");
        i++;
    }

    function c2Change() {
        change(".b2");
        change(".c1");
        change(".c2");
        change(".c3");
        i++;
    }
    function c3Change() {
        change(".b3");
        change(".c2");
        change(".c3");
        i++;
    }
    function checkSucess() {
        setTimeout(function () {
            if ($(".a1").css("background-color") != "rgb(255, 255, 255)" &&
                $(".a2").css("background-color") != "rgb(255, 255, 255)" &&
                $(".a3").css("background-color") != "rgb(255, 255, 255)" &&
                $(".b1").css("background-color") != "rgb(255, 255, 255)" &&
                $(".b2").css("background-color") != "rgb(255, 255, 255)" &&
                $(".b3").css("background-color") != "rgb(255, 255, 255)" &&
                $(".c1").css("background-color") != "rgb(255, 255, 255)" &&
                $(".c2").css("background-color") != "rgb(255, 255, 255)" &&
                $(".c3").css("background-color") != "rgb(255, 255, 255)") {
                $(".display").css("display", "inline");
                $(".text").html("成功 \r 你用了" + i + "次");
                $(".frequency").html(i);
                $("div").unbind();
                finalpoint = 1;
            }
        }, 500);
    }

    $(".a1").click(function () {
        a1Change();
    })

    $(".a2").click(function () {
        a2Change();
    })

    $(".a3").click(function () {
        a3Change();
    })

    $(".b1").click(function () {
        b1Change();
    })

    $(".b2").click(function () {
        b2Change();
    })

    $(".b3").click(function () {
        b3Change();
    })

    $(".c1").click(function () {
        c1Change();
    })
    $(".c2").click(function () {
        c2Change();
    })
    $(".c3").click(function () {
        c3Change();
    })

    $("div").mouseup(function () {
        checkSucess();
    })


    $(".reflash").click(function () {
        i = 0;
        $(".text").html("");
        $(".display").css("display", "none");
        if (finalpoint == 1) {
            bind();
            finalpoint = 0;
        }
        $("div").css("background-color", "rgb(255, 255, 255)")
        setTimeout(function () {
            for (var j = 0; j < Start.length; j++) {
                var k = Start[j];
                sw(k);
            }
        }, 200)
    })

    $(".NewGame").click(function () {
        i = 0;
        $(".text").html("");
        $(".display").css("display", "none");
        if (finalpoint == 1) {
            bind();
            finalpoint = 0;
        }
        $("div").css("background-color", "rgb(255, 255, 255)")
        setTimeout(function () {
            Random()
        }, 200)
    })
    
     $(".binder").click(function(){
    	bind();
    	console.log("sucess");
    })
    
    function bind() {
        $(".a1").on("click", function () { a1Change() });
        $(".a2").on("click", function () { a2Change() });
        $(".a3").on("click", function () { a3Change() });
        $(".b1").on("click", function () { b1Change() });
        $(".b2").on("click", function () { b2Change() });
        $(".b3").on("click", function () { b3Change() });
        $(".c1").on("click", function () { c1Change() });
        $(".c2").on("click", function () { c2Change() });
        $(".c3").on("click", function () { c3Change() });
        $("div").on("mouseup", function () { checkSucess() });
    }

})