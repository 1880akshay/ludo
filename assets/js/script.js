var c=1, die;
$('#roll').click(function() {
    die = Math.floor((Math.random() * 6) + 1);
    for(var i=1; i<=6; i++) {
        if(die === i) {
            $('#die').attr('src', 'assets/images/dice' + i + '.png');
        }
    }
    var tokenRed1 = $('#tokenRed1');
    var tokenRed2 = $('#tokenRed2');
    var tokenBlue1 = $('#tokenBlue1');
    var tokenBlue2 = $('#tokenBlue2');

    if(c === 1) {
        if(tokenRed1.parents('#locker1').length === 1 && tokenRed2.parents('#locker1').length === 1) {
            if(die === 6) {
                $('#roll').attr('disabled', 'true');
                $('#roll').css('cursor', 'not-allowed');
            }
            else {
                c++;
                $('#player').html('B');
            }
        }
        else if(tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length === 1) {
            
            if(tokenRed1.parents('#home1').length !== 1) {
                var activeId1 = Number($('.activeRed1').attr('id'));
                activeId1 += die;
                if(die !== 6) {
                    if(activeId1 > 36) {
                        activeId1 -= die;
                        c++;
                        $('#player').html('B');
                    }
                    else {
                        $('#roll').attr('disabled', 'true');
                        $('#roll').css('cursor', 'not-allowed');
                    }
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            else {
                if(die !== 6) {
                    c++;
                    $('#player').html('B');
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            
        }

        else if(tokenRed1.parents('#locker1').length === 1 && tokenRed2.parents('#locker1').length !== 1) {
           
            if(tokenRed2.parents('#home1').length !== 1) {
                var activeId2 = Number($('.activeRed2').attr('id'));
                activeId2 += die;
                if(die !== 6) {
                    if(activeId2 > 36) {
                        activeId2 -= die;
                        c++;
                        $('#player').html('B');
                    }
                    else {
                        $('#roll').attr('disabled', 'true');
                        $('#roll').css('cursor', 'not-allowed');
                    }
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            else {
                if(die !== 6) {
                    c++;
                    $('#player').html('B');
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            
        }

        else if(tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length !== 1) {
            $('#roll').attr('disabled', 'true');
            $('#roll').css('cursor', 'not-allowed');

            if(tokenRed1.parents('#home1').length === 1) {
                var activeId2 = Number($('.activeRed2').attr('id'));
                if(activeId2+die>36) {
                    c++;
                    $('#player').html('B');
                    $('#roll').removeAttr('disabled');
                    $('#roll').css('cursor', 'pointer');
                }
            }
            if(tokenRed2.parents('#home1').length === 1) {
                var activeId1 = Number($('.activeRed1').attr('id'));
                if(activeId1+die>36) {
                    c++;
                    $('#player').html('B');
                    $('#roll').removeAttr('disabled');
                    $('#roll').css('cursor', 'pointer');
                }
            }
            if(tokenRed1.parents('#home1').length !== 1 && tokenRed2.parents('#home1').length !== 1) {
                var activeId1 = Number($('.activeRed1').attr('id'));
                var activeId2 = Number($('.activeRed2').attr('id'));
                if(activeId1+die>36 && activeId2+die>36) {
                    c++;
                    $('#player').html('B');
                    $('#roll').removeAttr('disabled');
                    $('#roll').css('cursor', 'pointer');
                }
            }
        }
    }


    else {

        if(tokenBlue1.parents('#locker2').length === 1 && tokenBlue2.parents('#locker2').length === 1) {
            if(die === 6) {
                $('#roll').attr('disabled', 'true');
                $('#roll').css('cursor', 'not-allowed');
            }
            else {
                c--;
                $('#player').html('A');
            }
        }
        else if(tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length === 1) {
            
            if(tokenBlue1.parents('#home2').length !== 1) {
                var activeClass1 = $('.activeBlue1').attr('class');
                activeClass1 = activeClass1.substr(4, 2);
                activeClass1 = Number(activeClass1);
                activeClass1 += die;
                if(die !== 6) {
                    if(activeClass1 > 36) {
                        activeClass1 -= die;
                        c--;
                        $('#player').html('A');
                    }
                    else {
                        $('#roll').attr('disabled', 'true');
                        $('#roll').css('cursor', 'not-allowed');
                    }
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            else {
                if(die !== 6) {
                    c--;
                    $('#player').html('A');
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            
        }

        else if(tokenBlue1.parents('#locker2').length === 1 && tokenBlue2.parents('#locker2').length !== 1) {
            
            if(tokenBlue2.parents('#home2').length !== 1) {
                var activeClass2 = $('.activeBlue2').attr('class');
                activeClass2 = activeClass2.substr(4, 2);
                activeClass2 = Number(activeClass2);
                activeClass2 += die;
                if(die !== 6) {
                    if(activeClass1 > 36) {
                        activeClass1 -= die;
                        c--;
                        $('#player').html('A');
                    }
                    else {
                        $('#roll').attr('disabled', 'true');
                        $('#roll').css('cursor', 'not-allowed');
                    }
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            else {
                if(die !== 6) {
                    c--;
                    $('#player').html('A');
                }
                else {
                    $('#roll').attr('disabled', 'true');
                    $('#roll').css('cursor', 'not-allowed');
                }
            }
            
        }

        else if(tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length !== 1) {
            $('#roll').attr('disabled', 'true');
            $('#roll').css('cursor', 'not-allowed');

            if(tokenBlue1.parents('#home2').length === 1) {
                var activeClass2 = $('.activeBlue2').attr('class');
                activeClass2 = activeClass2.substr(4, 2);
                activeClass2 = Number(activeClass2);
                if(activeClass2+die>36) {
                    c--;
                    $('#player').html('A');
                    $('#roll').removeAttr('disabled');
                    $('#roll').css('cursor', 'pointer');
                }
            }
            if(tokenBlue2.parents('#home2').length === 1) {
                var activeClass1 = $('.activeBlue1').attr('class');
                activeClass1 = activeClass1.substr(4, 2);
                activeClass1 = Number(activeClass1);
                if(activeClass1+die>36) {
                    c--;
                    $('#player').html('A');
                    $('#roll').removeAttr('disabled');
                    $('#roll').css('cursor', 'pointer');
                }
            }
            if(tokenBlue1.parents('#home2').length !== 1 && tokenBlue2.parents('#home2').length !== 1) {
                var activeClass1 = $('.activeBlue1').attr('class');
                activeClass1 = activeClass1.substr(4, 2);
                activeClass1 = Number(activeClass1);
                var activeClass2 = $('.activeBlue2').attr('class');
                activeClass2 = activeClass2.substr(4, 2);
                activeClass2 = Number(activeClass2);
                if(activeClass1+die>36 && activeClass2+die>36) {
                    c--;
                    $('#player').html('A');
                    $('#roll').removeAttr('disabled');
                    $('#roll').css('cursor', 'pointer');
                }
            }
        }

    }

});

function tokenRed1Click() {
    var tokenRed1 = $('#tokenRed1');
    var tokenRed2 = $('#tokenRed2');
    if(die===6 && c===1 && tokenRed1.parents('#locker1').length === 1 && tokenRed2.parents('#locker1').length === 1) {
        tokenRed1.remove();
        $('#1').append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
        $('#1').addClass('activeRed1');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
    }
    else if(die === 6 && c===1 && tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length === 1) {
        var activeId1 = Number($('.activeRed1').attr('id'));
        activeId1 += 6;
        if(activeId1 < 36) {
            $('.activeRed1').removeClass('activeRed1');
            $('#' + activeId1).addClass('activeRed1');
            tokenRed1.remove();
            $('#' + activeId1).append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId1 === 36) {
            $('.activeRed1').removeClass('activeRed1');
            tokenRed1.remove();
            $('#home1').append('<div id="tokenRed1" class="tokenRed"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeId1 -= die;
        }
        
    }
    else if(die !== 6 && c===1 && tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length === 1) {
        var activeId1 = Number($('.activeRed1').attr('id'));
        activeId1 += die;
        if(activeId1 < 36) {
            $('.activeRed1').removeClass('activeRed1');
            $('#' + activeId1).addClass('activeRed1');
            tokenRed1.remove();
            $('#' + activeId1).append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId1 === 36) {
            $('.activeRed1').removeClass('activeRed1');
            tokenRed1.remove();
            $('#home1').append('<div id="tokenRed1" class="tokenRed"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
    }
    else if(die === 6 && c===1 && tokenRed1.parents('#locker1').length === 1 && tokenRed2.parents('#locker1').length !== 1) {
        tokenRed1.remove();
        $('#1').append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
        $('#1').addClass('activeRed1');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
    }
    else if(die!==6 && c===1 && tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length !== 1) {
        var activeId1 = Number($('.activeRed1').attr('id'));
        activeId1 += die;
        if(activeId1 < 36) {
            $('.activeRed1').removeClass('activeRed1');
            $('#' + activeId1).addClass('activeRed1');
            tokenRed1.remove();
            $('#' + activeId1).append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId1 === 36) {
            $('.activeRed1').removeClass('activeRed1');
            tokenRed1.remove();
            $('#home1').append('<div id="tokenRed1" class="tokenRed"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeId1 -= die;
        }
        
    }
    else if(die===6 && c===1 && tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length !== 1) {
        var activeId1 = Number($('.activeRed1').attr('id'));
        activeId1 += die;
        if(activeId1 < 36) {
            $('.activeRed1').removeClass('activeRed1');
            $('#' + activeId1).addClass('activeRed1');
            tokenRed1.remove();
            $('#' + activeId1).append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId1 === 36) {
            $('.activeRed1').removeClass('activeRed1');
            tokenRed1.remove();
            $('#home1').append('<div id="tokenRed1" class="tokenRed"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeId1 -= die;
        }
        
    }

    winner();
    twoTogether();
    cut();
    
}
function tokenRed2Click() {
    var tokenRed1 = $('#tokenRed1');
    var tokenRed2 = $('#tokenRed2');
    if(die===6 && c===1 && tokenRed1.parents('#locker1').length === 1 && tokenRed2.parents('#locker1').length === 1) {
        tokenRed2.remove();
        $('#1').append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
        $('#1').addClass('activeRed2');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
    }
    else if(die===6 && c===1 && tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length === 1) {
        tokenRed2.remove();
        $('#1').append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
        $('#1').addClass('activeRed2');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
        
    }
    else if(die===6 && c===1 && tokenRed1.parents('#locker1').length === 1 && tokenRed2.parents('#locker1').length !== 1) {
        var activeId2 = Number($('.activeRed2').attr('id'));
        activeId2 += die;
        if(activeId2 < 36) {
            $('.activeRed2').removeClass('activeRed2');
            $('#' + activeId2).addClass('activeRed2');
            tokenRed2.remove();
            $('#' + activeId2).append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId2 === 36) {
            $('.activeRed2').removeClass('activeRed2');
            tokenRed2.remove();
            $('#home1').append('<div id="tokenRed2" class="tokenRed"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeId2 -=die;
        }
    }
    else if(die!==6 && c===1 && tokenRed1.parents('#locker1').length === 1 && tokenRed2.parents('#locker1').length !== 1) {
        var activeId2 = Number($('.activeRed2').attr('id'));
        activeId2 += die;
        if(activeId2 < 36) {
            $('.activeRed2').removeClass('activeRed2');
            $('#' + activeId2).addClass('activeRed2');
            tokenRed2.remove();
            $('#' + activeId2).append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId2 === 36) {
            $('.activeRed2').removeClass('activeRed2');
            tokenRed2.remove();
            $('#home1').append('<div id="tokenRed2" class="tokenRed"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
    }
    else if(die!==6 && c===1 && tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length !== 1) {
        var activeId2 = Number($('.activeRed2').attr('id'));
        activeId2 += die;
        if(activeId2 < 36) {
            $('.activeRed2').removeClass('activeRed2');
            $('#' + activeId2).addClass('activeRed2');
            tokenRed2.remove();
            $('#' + activeId2).append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId2 === 36) {
            $('.activeRed2').removeClass('activeRed2');
            tokenRed2.remove();
            $('#home1').append('<div id="tokenRed2" class="tokenRed"></div>');
            c++;
            $('#player').html('B');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeId2 -=die;
        }
        
    }
    else if(die===6 && c===1 && tokenRed1.parents('#locker1').length !== 1 && tokenRed2.parents('#locker1').length !== 1) {
        var activeId2 = Number($('.activeRed2').attr('id'));
        activeId2 += die;
        if(activeId2 < 36) {
            $('.activeRed2').removeClass('activeRed2');
            $('#' + activeId2).addClass('activeRed2');
            tokenRed2.remove();
            $('#' + activeId2).append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeId2 === 36) {
            $('.activeRed2').removeClass('activeRed2');
            tokenRed2.remove();
            $('#home1').append('<div id="tokenRed2" class="tokenRed"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeId2 -= die;
        }
        
    }

    winner();
    twoTogether();
    cut();

}


function tokenBlue1Click() {

    var tokenBlue1 = $('#tokenBlue1');
    var tokenBlue2 = $('#tokenBlue2');
    if(die===6 && c===2 && tokenBlue1.parents('#locker2').length === 1 && tokenBlue2.parents('#locker2').length === 1) {
        tokenBlue1.remove();
        $('.1').append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
        $('.1').addClass('activeBlue1');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
    }
    else if(die === 6 && c===2 && tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length === 1) {
        var activeClass1 = $('.activeBlue1').attr('class');
        activeClass1 = activeClass1.substr(4, 2);
        activeClass1 = Number(activeClass1);
        activeClass1 += 6;
        if(activeClass1 < 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            $('.' + activeClass1).addClass('activeBlue1');
            tokenBlue1.remove();
            $('.' + activeClass1).append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass1 === 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            tokenBlue1.remove();
            $('#home2').append('<div id="tokenBlue1" class="tokenBlue"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeClass1 -= die;
        }
        
    }
    else if(die !== 6 && c===2 && tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length === 1) {
        var activeClass1 = $('.activeBlue1').attr('class');
        activeClass1 = activeClass1.substr(4, 2);
        activeClass1 = Number(activeClass1);
        activeClass1 += die;
        if(activeClass1 < 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            $('.' + activeClass1).addClass('activeBlue1');
            tokenBlue1.remove();
            $('.' + activeClass1).append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass1 === 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            tokenBlue1.remove();
            $('#home2').append('<div id="tokenBlue1" class="tokenBlue"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
    }
    else if(die === 6 && c===2 && tokenBlue1.parents('#locker2').length === 1 && tokenBlue2.parents('#locker2').length !== 1) {
        tokenBlue1.remove();
        $('.1').append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
        $('.1').addClass('activeBlue1');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
    }
    else if(die!==6 && c===2 && tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length !== 1) {
        var activeClass1 = $('.activeBlue1').attr('class');
        activeClass1 = activeClass1.substr(4, 2);
        activeClass1 = Number(activeClass1);
        activeClass1 += die;
        if(activeClass1 < 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            $('.' + activeClass1).addClass('activeBlue1');
            tokenBlue1.remove();
            $('.' + activeClass1).append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass1 === 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            tokenBlue1.remove();
            $('#home2').append('<div id="tokenBlue1" class="tokenBlue"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeClass1 -= die;
        }
        
    }
    else if(die===6 && c===2 && tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length !== 1) {
        var activeClass1 = $('.activeBlue1').attr('class');
        activeClass1 = activeClass1.substr(4, 2);
        activeClass1 = Number(activeClass1);
        activeClass1 += die;
        if(activeClass1 < 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            $('.' + activeClass1).addClass('activeBlue1');
            tokenBlue1.remove();
            $('.' + activeClass1).append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass1 === 36) {
            $('.activeBlue1').removeClass('activeBlue1');
            tokenBlue1.remove();
            $('#home2').append('<div id="tokenBlue1" class="tokenBlue"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeClass1 -= die;
        }
        
    }

    winner();
    twoTogether();
    cut();
}
function tokenBlue2Click() {
    
    var tokenBlue1 = $('#tokenBlue1');
    var tokenBlue2 = $('#tokenBlue2');
    if(die===6 && c===2 && tokenBlue1.parents('#locker2').length === 1 && tokenBlue2.parents('#locker2').length === 1) {
        tokenBlue2.remove();
        $('.1').append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
        $('.1').addClass('activeBlue2');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
    }
    else if(die===6 && c===2 && tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length === 1) {
        tokenBlue2.remove();
        $('.1').append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
        $('.1').addClass('activeBlue2');
        $('#roll').removeAttr('disabled');
        $('#roll').css('cursor', 'pointer');
        
    }
    else if(die===6 && c===2 && tokenBlue1.parents('#locker2').length === 1 && tokenBlue2.parents('#locker2').length !== 1) {
        var activeClass2 = $('.activeBlue2').attr('class');
        activeClass2 = activeClass2.substr(4, 2);
        activeClass2 = Number(activeClass2);
        activeClass2 += die;
        if(activeClass2 < 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            $('.' + activeClass2).addClass('activeBlue2');
            tokenBlue2.remove();
            $('.' + activeClass2).append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass2 === 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            tokenBlue2.remove();
            $('#home2').append('<div id="tokenBlue2" class="tokenBlue"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeClass2 -=die;
        }
    }
    else if(die!==6 && c===2 && tokenBlue1.parents('#locker2').length === 1 && tokenBlue2.parents('#locker2').length !== 1) {
        var activeClass2 = $('.activeBlue2').attr('class');
        activeClass2 = activeClass2.substr(4, 2);
        activeClass2 = Number(activeClass2);
        activeClass2 += die;
        if(activeClass2 < 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            $('.' + activeClass2).addClass('activeBlue2');
            tokenBlue2.remove();
            $('.' + activeClass2).append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass2 === 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            tokenBlue2.remove();
            $('#home2').append('<div id="tokenBlue2" class="tokenBlue"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
    }
    else if(die!==6 && c===2 && tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length !== 1) {
        var activeClass2 = $('.activeBlue2').attr('class');
        activeClass2 = activeClass2.substr(4, 2);
        activeClass2 = Number(activeClass2);
        activeClass2 += die;
        if(activeClass2 < 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            $('.' + activeClass2).addClass('activeBlue2');
            tokenBlue2.remove();
            $('.' + activeClass2).append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass2 === 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            tokenBlue2.remove();
            $('#home2').append('<div id="tokenBlue2" class="tokenBlue"></div>');
            c--;
            $('#player').html('A');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeClass2 -=die;
        }
        
    }
    else if(die===6 && c===2 && tokenBlue1.parents('#locker2').length !== 1 && tokenBlue2.parents('#locker2').length !== 1) {
        var activeClass2 = $('.activeBlue2').attr('class');
        activeClass2 = activeClass2.substr(4, 2);
        activeClass2 = Number(activeClass2);
        activeClass2 += die;
        if(activeClass2 < 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            $('.' + activeClass2).addClass('activeBlue2');
            tokenBlue2.remove();
            $('.' + activeClass2).append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else if(activeClass2 === 36) {
            $('.activeBlue2').removeClass('activeBlue2');
            tokenBlue2.remove();
            $('#home2').append('<div id="tokenBlue2" class="tokenBlue"></div>');
            $('#roll').removeAttr('disabled');
            $('#roll').css('cursor', 'pointer');
        }
        else {
            activeClass2 -= die;
        }
        
    }

    winner();
    twoTogether();
    cut();
}




function winner() {
    var tokenRed1 = $('#tokenRed1');
    var tokenRed2 = $('#tokenRed2');
    var tokenBlue1 = $('#tokenBlue1');
    var tokenBlue2 = $('#tokenBlue2');
    if(tokenRed1.parents('#home1').length === 1 && tokenRed2.parents('#home1').length === 1) {
        if(!alert('Player A is the winner!')) {
            window.location.reload();
        }
        $('#roll').attr('disabled', 'true');
        $('#roll').css('cursor', 'not-allowed');
    }
    if(tokenBlue1.parents('#home2').length === 1 && tokenBlue2.parents('#home2').length === 1) {
        if(!alert('Player B is the winner!')) {
            window.location.reload();
        }
        $('#roll').attr('disabled', 'true');
        $('#roll').css('cursor', 'not-allowed');
    }
}


function twoTogether() {
    var tokenRed1 = $('#tokenRed1');
    var tokenRed2 = $('#tokenRed2');
    var tokenBlue1 = $('#tokenBlue1');
    var tokenBlue2 = $('#tokenBlue2');
    $('.box').each(function() {
        if($(this).hasClass('activeRed1') && $(this).hasClass('activeRed2')) {
            tokenRed1.css({'height' : '15', 'width' : '15'});
            tokenRed2.css({'height' : '15', 'width' : '15'});
            $(this).css('padding-top', '15px');
        }
        else if($(this).hasClass('activeRed1') && $(this).hasClass('activeRed2') === false) {
            tokenRed1.css({'height' : '30', 'width' : '30'});
            tokenRed2.css({'height' : '30', 'width' : '30'});
            $(this).css('padding-top', '8px');
        }
        else if($(this).hasClass('activeRed2') && $(this).hasClass('activeRed1') === false) {
            tokenRed1.css({'height' : '30', 'width' : '30'});
            tokenRed2.css({'height' : '30', 'width' : '30'});
            $(this).css('padding-top', '8px');
        }
        
        if($(this).hasClass('activeBlue1') && $(this).hasClass('activeBlue2')) {
            tokenBlue1.css({'height' : '15', 'width' : '15'});
            tokenBlue2.css({'height' : '15', 'width' : '15'});
            $(this).css('padding-top', '15px');
        }
        else if($(this).hasClass('activeBlue1') && $(this).hasClass('activeBlue2') === false) {
            tokenBlue1.css({'height' : '30', 'width' : '30'});
            tokenBlue2.css({'height' : '30', 'width' : '30'});
            $(this).css('padding-top', '8px');
        }
        else if($(this).hasClass('activeBlue2') && $(this).hasClass('activeBlue1') === false) {
            tokenBlue1.css({'height' : '30', 'width' : '30'});
            tokenBlue2.css({'height' : '30', 'width' : '30'});
            $(this).css('padding-top', '8px');
        }
        
    });
}

function cut() {
    var tokenRed1 = $('#tokenRed1');
    var tokenRed2 = $('#tokenRed2');
    var tokenBlue1 = $('#tokenBlue1');
    var tokenBlue2 = $('#tokenBlue2');
    $('.box').each(function() {
        if(die !== 6) {
            if(c===1) {
                if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue1')) {
                    tokenRed1.remove();
                    $('#locker1').append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
                    $('.activeRed1').removeClass('activeRed1');
                    c++;
                    $('#player').html('B');
                }
                else if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue2')) {
                    tokenRed1.remove();
                    $('#locker1').append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
                    $('.activeRed1').removeClass('activeRed1');
                    c++;
                    $('#player').html('B');
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue1')) {
                    tokenRed2.remove();
                    $('#locker1').append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
                    $('.activeRed2').removeClass('activeRed2');
                    c++;
                    $('#player').html('B');
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue2')) {
                    tokenRed2.remove();
                    $('#locker1').append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
                    $('.activeRed2').removeClass('activeRed2');
                    c++;
                    $('#player').html('B');
                }

            }
            else {
                if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue1')) {
                    tokenBlue1.remove();
                    $('#locker2').append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
                    $('.activeBlue1').removeClass('activeBlue1');
                    c--;
                    $('#player').html('A');
                }
                else if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue2')) {
                    tokenBlue2.remove();
                    $('#locker2').append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
                    $('.activeBlue2').removeClass('activeBlue2');
                    c--;
                    $('#player').html('A');
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue1')) {
                    tokenBlue1.remove();
                    $('#locker2').append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
                    $('.activeBlue1').removeClass('activeBlue1');
                    c--;
                    $('#player').html('A');
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue2')) {
                    tokenBlue2.remove();
                    $('#locker2').append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
                    $('.activeBlue2').removeClass('activeBlue2');
                    c--;
                    $('#player').html('A');
                }
            }
        }
        else {
            if(c===1) {
                if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue1')) {
                    tokenBlue1.remove();
                    $('#locker2').append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
                    $('.activeBlue1').removeClass('activeBlue1');
                    
                }
                else if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue2')) {
                    tokenBlue2.remove();
                    $('#locker2').append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
                    $('.activeBlue2').removeClass('activeBlue2');
                    
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue1')) {
                    tokenBlue1.remove();
                    $('#locker2').append('<div id="tokenBlue1" class="tokenBlue" onclick="tokenBlue1Click()"></div>');
                    $('.activeBlue1').removeClass('activeBlue1');
                    
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue2')) {
                    tokenBlue2.remove();
                    $('#locker2').append('<div id="tokenBlue2" class="tokenBlue" onclick="tokenBlue2Click()"></div>');
                    $('.activeBlue2').removeClass('activeBlue2');
                    
                }
            }
            else {
                if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue1')) {
                    tokenRed1.remove();
                    $('#locker1').append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
                    $('.activeRed1').removeClass('activeRed1');
                    
                }
                else if($(this).hasClass('activeRed1') && $(this).hasClass('activeBlue2')) {
                    tokenRed1.remove();
                    $('#locker1').append('<div id="tokenRed1" class="tokenRed" onclick="tokenRed1Click()"></div>');
                    $('.activeRed1').removeClass('activeRed1');
                    
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue1')) {
                    tokenRed2.remove();
                    $('#locker1').append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
                    $('.activeRed2').removeClass('activeRed2');
                    
                }
                else if($(this).hasClass('activeRed2') && $(this).hasClass('activeBlue2')) {
                    tokenRed2.remove();
                    $('#locker1').append('<div id="tokenRed2" class="tokenRed" onclick="tokenRed2Click()"></div>');
                    $('.activeRed2').removeClass('activeRed2');
                    
                }
            }
        }
    })
}