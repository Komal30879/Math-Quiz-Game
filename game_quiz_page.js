player1_score = localStorage.setItem("player1_score", 0);
player2_score = localStorage.setItem("player2_score", 0);

player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

document.getElementById("player_1_name").innerHTML = player1 + ":";
document.getElementById("player_2_name").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML ="Question Turn - " + player1;
document.getElementById("player_1_name").innerHTML ="Answer Turn - " + player2;
console.log("yeahhh");
function send(){
    number1 = document.getElementById("number").value;
    number2 = document.getElementById("number1").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer:" + "<input type = 'text' id = 'input_check_box'>";
    check_button = "<br<br>" + "<button class='btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number").innerHTML = "";
    document.getElementById("number1").innerHTML = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
            update_player1_score = player1_score + 1;
            document.getElementById("player_1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score + 1;
            document.getElementById("player_2_score").innerHTML = update_player2_score;
        }
    }
    
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
