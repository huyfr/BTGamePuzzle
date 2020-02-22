function randomImg(type) {
    switch (type) {
        case 1:
            let randomFirst = (Math.floor(Math.random() * 3) + 1);

            if (randomFirst === 1)
            {
                document.getElementById("hiddenFirst").value = "1";
            }
            else
            {
                if (randomFirst === 2)
                {
                    document.getElementById("hiddenFirst").value = "2";
                }
                else
                {
                    document.getElementById("hiddenFirst").value = "3";
                }
            }

            document.getElementById("imgPart1").src = "pictures/" + randomFirst + ".jpg";
            checkImg();
            break;
        case 2:
            let randonSecond = (Math.floor(Math.random() * (6 - 4 + 1)) + 4); //((max-min)+1)+min

            if (randonSecond === 4)
            {
                document.getElementById("hiddenSecond").value= "1";
            }
            else
            {
                if (randonSecond === 5)
                {
                    document.getElementById("hiddenSecond").value= "2";
                }
                else
                {
                    document.getElementById("hiddenSecond").value= "3";
                }
            }

            document.getElementById("imgPart2").src = "pictures/" + randonSecond + ".jpg";
            checkImg();
            break;
        case 3:
            let randomThird = (Math.floor(Math.random() * (9 - 7 + 1)) + 7); //((max-min)+1)+min

            if (randomThird === 7)
            {
                document.getElementById("hiddenThird").value = "1";
            }
            else
            {
                if (randomThird === 8)
                {
                    document.getElementById("hiddenThird").value= "2";
                }
                else
                {
                    document.getElementById("hiddenThird").value= "3";
                }
            }

            document.getElementById("imgPart3").src = "pictures/" + randomThird + ".jpg";
            checkImg();
            break;
        case 4:
            let randomFourth = (Math.floor(Math.random() * (12 - 10 + 1)) + 10); //((max-min)+1)+min

            if (randomFourth === 10)
            {
                document.getElementById("hiddenFourth").value = "1";
            }
            else
            {
                if (randomFourth === 11)
                {
                    document.getElementById("hiddenFourth").value = "2";
                }
                else
                {
                    document.getElementById("hiddenFourth").value = "3";
                }
            }

            document.getElementById("imgPart4").src = "pictures/" + randomFourth + ".jpg";
            checkImg();
            break;
        case 5:
            let randomFifth = (Math.floor(Math.random() * (15 - 13 + 1)) + 13); //((max-min)+1)+min

            if (randomFifth === 13)
            {
                document.getElementById("hiddenFifth").value = "1";
            }
            else
            {
                if (randomFifth === 14)
                {
                    document.getElementById("hiddenFifth").value = "2";
                }
                else
                {
                    document.getElementById("hiddenFifth").value = "3";
                }
            }

            document.getElementById("imgPart5").src = "pictures/" + randomFifth + ".jpg";
            checkImg();
            break;
    }
}

function checkImg()
{
    let hiddenFirst, hiddenSecond, hiddenThird, hiddenFourth, hiddenFifth;
    let result = false;
    hiddenFirst = document.getElementById("hiddenFirst").value;
    hiddenSecond = document.getElementById("hiddenSecond").value;
    hiddenThird = document.getElementById("hiddenThird").value;
    hiddenFourth = document.getElementById("hiddenFourth").value;
    hiddenFifth = document.getElementById("hiddenFifth").value;

    if (hiddenFirst === hiddenSecond
        && hiddenFirst === hiddenThird
        && hiddenFirst === hiddenFourth
        && hiddenFirst === hiddenFifth
        )
    {
        result = true;
        document.getElementById("imgPart1").style.boxShadow = "2px 3px 3px red";
        document.getElementById("imgPart2").style.boxShadow = "2px 3px 3px red";
        document.getElementById("imgPart3").style.boxShadow = "2px 3px 3px red";
        document.getElementById("imgPart4").style.boxShadow = "2px 3px 3px red";
        document.getElementById("imgPart5").style.boxShadow = "2px 3px 3px red";
    }
    else
    {
        result = false;
        document.getElementById("imgPart1").style.boxShadow = "2px 3px 3px black";
        document.getElementById("imgPart2").style.boxShadow = "2px 3px 3px black";
        document.getElementById("imgPart3").style.boxShadow = "2px 3px 3px black";
        document.getElementById("imgPart4").style.boxShadow = "2px 3px 3px black";
        document.getElementById("imgPart5").style.boxShadow = "2px 3px 3px black";
    }
}

randomImg(1);
randomImg(2);
randomImg(3);
randomImg(4);
randomImg(5);



