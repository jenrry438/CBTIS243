$(document).ready(function(){

$("#parrafo1").click(function(evento){
	evento.preventDefault();
	$("#parrafo1").hide(5000);
 });

$("#parrafo1").click(function(evento){
	evento.preventDefault();
	$("#parrafo1").show(5000);
 });
$("#huno").fadeOut(5000, function(){
	$("#huno").css({'top':300, 'left':200});
	$("#huno").fadeIn(5000);
 });
$("#huno").fadeOut(5000, function(){
	$("#huno").css({'top':300, 'left':200});
	$("#huno").fadeIn(5000);
 });
});