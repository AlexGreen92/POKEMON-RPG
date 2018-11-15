
var pikachu={
    name:'Pikachu',
    healthPoints:140,
    attackPower:10,
    counterAttackPower:17,
}
var bulbasaur={
    name:'Bulbasaur',
    healthPoints:150,
    attackPower:9,
    counterAttackPower:19,
}
var charmander={
    name:'Charmander',
    healthPoints:120,
    attackPower:13,
    counterAttackPower:18,
}
var psyduck={
    name:'Psyduck',
    healthPoints:115,
    attackPower:21,
    counterAttackPower:16,
}
characterChosen=false;
enemyChosen=false;
var char;
var enemy;
var baseIncrease;
var enemiesDefeated=0;
$(document).ready(function() {

$('.character').on('click',function(){
    if(!characterChosen){
    $('#yourCharacter').html(this)
    if(this.id==1){char=pikachu}else if(this.id==2){char=bulbasaur}else if(this.id==3){char=charmander}else{char=psyduck}
    characterChosen=true;
    baseIncrease=char.attackPower;
    $('#characters').appendTo('#enemies')
    }else if(!enemyChosen&&this.id!=$('#yourCharacter .character').attr('id')){
    $('#defender').html(this)
    if(this.id==1){enemy=pikachu}else if(this.id==2){enemy=bulbasaur}else if(this.id==3){enemy=charmander}else{enemy=psyduck}
    enemyChosen=true;
    }
})
$('#attack').on('click',function(){
    if(characterChosen&&enemyChosen){
    enemy.healthPoints-=char.attackPower;
    char.healthPoints-=enemy.counterAttackPower;
    $('#log1').text('You attacked '+enemy.name+' for '+char.attackPower+' damage.');
    $('#log2').text(enemy.name+' attacked you back for '+enemy.counterAttackPower+' damage.');
    char.attackPower+=baseIncrease;
    console.log(char.attackPower)
    if(enemy.healthPoints<=0){
        $('#log1').text('You have defeated '+enemy.name+', you can choose to fight another enemy.');
        $('#log2').text('');
        $('#defender').find('.character').remove();
        enemyChosen=false;
        enemiesDefeated++;
    }
    if(char.healthPoints<=0){
        $('#log1').text('You have been defeated... GAME OVER!!!!');
        $('#log2').html('<button onclick="myFunc()">Restart</button>');
        enemyChosen=false;
    }
    if(enemiesDefeated==3){
        $('#log1').text('You won!!!! GAME OVER!!!');
        $('#log2').html('<button onclick="myFunc()">Restart</button>');
        if(char.healthPoints<=0){char.healthPoints=1;$('#log1').append('<div>You barely survived!:)</div>')}
    }
    $('#defender').find('.hp').text(enemy.healthPoints)
    $('#yourCharacter').find('.hp').text(char.healthPoints)
}
})

})
function myFunc(){
    window.location.reload()
}