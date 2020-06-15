<?php
use App\Http\Controllers\BotManController;

$botman = resolve('botman');

$botman->hears('cheguei', function ($bot) {
    $bot->reply('Que bom que você chegou bem, veja a sua pontuação https://cristal.netlify.app/duration');
});

$botman->hears('/start', BotManController::class.'@startConversation');
$botman->hears('Oi', BotManController::class.'@startConversation');



