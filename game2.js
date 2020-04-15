$(document).ready(function () {

    var finalpoint = 0;
    var i = 0;
    var Start = [];

    function Random() {
        var StartStr = "";
        console.log("Num:" + Num);
        var m = 0;
        var n = 0;
        var Num = $(".Num").text();
        if (Num == "4") {
            m = 9;
            n = 16;
        } else {
            m = 5;
            n = 9;
        }

        for (var j = 0; j < m; j++) {

            let k = Math.floor(Math.random() * n) + 1;
            console.log(k);
            Start[j] = k;
        }
        Start.sort();
        console.log("Start.sort():"+Start.sort());
        var St = Start;
        for (var j = 0; j < Start.length - 1; j++) {
            if (Start[j] == Start[j + 1]) {
                St.splice(j, 2);
            }
        }
        setTimeout(function () {
            for (var j = 0; j < St.length; j++) {
                sw(St[j]);
                StartStr += j == 0 ? St[j] : "," + St[j];
                console.log(StartStr);
                $(".Start").html(StartStr);
            }
            console.log(St);
        }, 50)

    }




    Random();
    bind();

    $(".hack").click(function () {
        $(".a1").css("background-color", "rgb(0,0,0)");
        $(".a2").css("background-color", "rgb(0,0,0)");
        $(".a3").css("background-color", "rgb(0,0,0)");
        $(".a4").css("background-color", "rgb(0,0,0)");
        $(".b1").css("background-color", "rgb(0,0,0)");
        $(".b2").css("background-color", "rgb(0,0,0)");
        $(".b3").css("background-color", "rgb(0,0,0)");
        $(".b4").css("background-color", "rgb(0,0,0)");
        $(".c1").css("background-color", "rgb(0,0,0)");
        $(".c2").css("background-color", "rgb(0,0,0)");
        $(".c3").css("background-color", "rgb(0,0,0)");
        $(".c4").css("background-color", "rgb(255,255,255)");
        $(".d1").css("background-color", "rgb(0,0,0)");
        $(".d2").css("background-color", "rgb(0,0,0)");
        $(".d3").css("background-color", "rgb(255,255,255)");
        $(".d4").css("background-color", "rgb(255,255,255)");
    })

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
            case 10: {
                change(".a4");
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
            case 11: {
                change(".b4");
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
            case 12: {
                change(".c4");
                break;
            }
            case 13: {
                change(".d1");
                break;
            }
            case 14: {
                change(".d2");
                break;
            }
            case 15: {
                change(".d3");
                break;
            }
            case 16: {
                change(".d4");
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
        checkSucess();
        i++;
    }

    function a2Change() {
        change(".a1");
        change(".a2");
        change(".a3");
        change(".b2");
        checkSucess();
        i++;
    }

    function a3Change() {
        change(".a2");
        change(".a3");
        change(".a4");
        change(".b3");
        checkSucess();
        i++;
    }

    function a4Change() {
        change(".a3");
        change(".a4");
        change(".b4");
        checkSucess();
        i++;
    }

    function b1Change() {
        change(".a1");
        change(".b1");
        change(".b2");
        change(".c1");
        checkSucess();
        i++;
    }

    function b2Change() {
        change(".a2");
        change(".b1");
        change(".b2");
        change(".b3");
        change(".c2");
        checkSucess();
        i++;
    }

    function b3Change() {
        change(".a3");
        change(".b2");
        change(".b3");
        change(".b4");
        change(".c3");
        checkSucess();
        i++;
    }

    function b4Change() {
        change(".a4");
        change(".b3");
        change(".b4");
        change(".c4");
        checkSucess();
        i++;
    }

    function c1Change() {
        change(".b1");
        change(".c1");
        change(".c2");
        change(".d1");
        checkSucess();
        i++;
    }

    function c2Change() {
        change(".b2");
        change(".c1");
        change(".c2");
        change(".c3");
        change(".d2");
        checkSucess();
        i++;
    }
    function c3Change() {
        change(".b3");
        change(".c2");
        change(".c3");
        change(".c4");
        change(".d3");
        checkSucess();
        i++;
    }
    function c4Change() {
        change(".b4");
        change(".c3");
        change(".c4");
        change(".d4");
        checkSucess();
        i++;
    }
    function d1Change() {
        change(".c1");
        change(".d1");
        change(".d2");
        checkSucess();
        i++;
    }
    function d2Change() {
        change(".c2");
        change(".d1");
        change(".d2");
        change(".d3");
        checkSucess();
        i++;
    }
    function d3Change() {
        change(".c3");
        change(".d2");
        change(".d3");
        change(".d4");
        checkSucess();
        i++;
    }
    function d4Change() {
        change(".c4");
        change(".d3");
        change(".d4");
        checkSucess();
        i++;

    }
    function checkSucess() {
        setTimeout(function () {
            if ($(".a1").css("background-color") != "rgb(255, 255, 255)" &&
                $(".a2").css("background-color") != "rgb(255, 255, 255)" &&
                $(".a3").css("background-color") != "rgb(255, 255, 255)" &&
                $(".a4").css("background-color") != "rgb(255, 255, 255)" &&
                $(".b1").css("background-color") != "rgb(255, 255, 255)" &&
                $(".b2").css("background-color") != "rgb(255, 255, 255)" &&
                $(".b3").css("background-color") != "rgb(255, 255, 255)" &&
                $(".b4").css("background-color") != "rgb(255, 255, 255)" &&
                $(".c1").css("background-color") != "rgb(255, 255, 255)" &&
                $(".c2").css("background-color") != "rgb(255, 255, 255)" &&
                $(".c3").css("background-color") != "rgb(255, 255, 255)" &&
                $(".c4").css("background-color") != "rgb(255, 255, 255)" &&
                $(".d1").css("background-color") != "rgb(255, 255, 255)" &&
                $(".d2").css("background-color") != "rgb(255, 255, 255)" &&
                $(".d3").css("background-color") != "rgb(255, 255, 255)" &&
                $(".d4").css("background-color") != "rgb(255, 255, 255)") {
                $(".display").css("display", "inline");
                $(".text").html("成功 \r 你用了" + i + "次");
                $(".frequency").html(i);
                $(document).off("click", ".a1");
                $(document).off("click", ".a2");
                $(document).off("click", ".a3");
                $(document).off("click", ".a4");
                $(document).off("click", ".b1");
                $(document).off("click", ".b2");
                $(document).off("click", ".b3");
                $(document).off("click", ".b4");
                $(document).off("click", ".c1");
                $(document).off("click", ".c2");
                $(document).off("click", ".c3");
                $(document).off("click", ".c4");
                $(document).off("click", ".d1");
                $(document).off("click", ".d2");
                $(document).off("click", ".d3");
                $(document).off("click", ".d4");
                finalpoint = 1;
            }
        }, 300);

    }



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

    $(".binder").click(function () {
        finalpoint = 1;
        $(document).off("click", ".a1");
        $(document).off("click", ".a2");
        $(document).off("click", ".a3");
        $(document).off("click", ".a4");
        $(document).off("click", ".b1");
        $(document).off("click", ".b2");
        $(document).off("click", ".b3");
        $(document).off("click", ".b4");
        $(document).off("click", ".c1");
        $(document).off("click", ".c2");
        $(document).off("click", ".c3");
        $(document).off("click", ".c4");
        $(document).off("click", ".d1");
        $(document).off("click", ".d2");
        $(document).off("click", ".d3");
        $(document).off("click", ".d4");
        $(".NewGame").click();
        console.log("sucess");
        i = 0;
    })

    function bind() {
        $(document).on("click", ".a1", function () { a1Change() });
        $(document).on("click", ".a2", function () { a2Change() });
        $(document).on("click", ".a3", function () { a3Change() });
        $(document).on("click", ".a4", function () { a4Change() });
        $(document).on("click", ".b1", function () { b1Change() });
        $(document).on("click", ".b2", function () { b2Change() });
        $(document).on("click", ".b3", function () { b3Change() });
        $(document).on("click", ".b4", function () { b4Change() });
        $(document).on("click", ".c1", function () { c1Change() });
        $(document).on("click", ".c2", function () { c2Change() });
        $(document).on("click", ".c3", function () { c3Change() });
        $(document).on("click", ".c4", function () { c4Change() });
        $(document).on("click", ".d1", function () { d1Change() });
        $(document).on("click", ".d2", function () { d2Change() });
        $(document).on("click", ".d3", function () { d3Change() });
        $(document).on("click", ".d4", function () { d4Change() });
    }



})