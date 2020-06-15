<?php

namespace App\Conversations;

use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;
use BotMan\BotMan\Messages\Outgoing\Question;

class ExampleConversation extends Conversation
{
    protected $firstName;

    protected $age;

    protected $cpf;

    protected $email;

    /**
     * Start the conversation
     */
    public function run()
    {
        $this->askReason();
    }

    /**
     * First question
     */
    public function askReason()
    {
        $user = $this->getBot()->getUser();

        $this->say("Oi! Eu sou a Cristal, sua nova companheira de viagem! Nós vamos ter longas horas pela frente, mas antes, quero te conhecer melhor!");

        $this->ask('Qual o seu nome?', function (Answer $answer) {
            // Save result
            $this->firstname = $answer->getText();

            $this->say('Muito bom te conhecer  ' . $this->firstname);
            $this->askEmail();
        });
    }

    public function askEmail()
    {
        $this->ask('Me conta a sua idade?', function (Answer $answer) {
            // Save result
            $this->age = $answer->getText();

            $this->say('Legal, você tem ' . $this->age . ' anos');
            $this->askCPF();
        });
    }

    public function askEmailTrue()
    {
        $this->ask('Me conta o seu email??', function (Answer $answer) {
            // Save result
            $this->email = $answer->getText();

            $this->say('Otimo, agora que seu email é ' . $this->email . ' vou te cadastrar na plataforma de beneficios que eu cuido especialmente para você');
            $this->say('só um momento');
            $this->say('...');
            $this->say('...');
            $this->say('...');
            $this->say('...');
            $this->say('Pronto é só clicar no link abaixo, até daqui a pouco ;)');
            $this->say('https://cristal.netlify.app/');
        });
    }

    public function askCPF()
    {
        $this->ask('Agora me diga o seu CPF, isto é muito importante para você aproveitar tudo de bom que posso te indicar', function (Answer $answer) {
            // Save result
            $this->cpf = $answer->getText();

            $this->say('OK seu CPF é ' . $this->cpf);

            $this->say("Agora eu gostaria de saber um pouco sobre seus hábito, assim posso te ajudar a tornar a sua viagem muito melhor! Vamos começar?");
            $this->askHabits();
        });
    }

    public function askHabits()
    {
        $question = Question::create('Você tem alguma das doenças abaixo?')
            ->fallback('Eita, que eu não entendi nada...')
            ->callbackId('create_database')
            ->addButtons([
                Button::create('Pressão alta ')->value('Pressão alta '),
                Button::create('Diabetes')->value('Diabetes'),
                Button::create('Colesterol')->value('Colesterol'),
                Button::create('Todas')->value('Todas'),
                Button::create('Nenhuma')->value('Nenhuma'),
            ]);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $selectedValue = $answer->getValue(); // will be either 'yes' or 'no'
                $selectedText = $answer->getText(); // will be either 'Of course' or 'Hell no!'[
                $this->say('Você respondeu: ' . $selectedText);
                $this->askHabits2();
            }
        });
    }

    public function askHabits2()
    {
        $question = Question::create('Você costuma se exercitar durante a viagem?')
            ->fallback('Eita, que eu não entendi nada...')
            ->callbackId('create_database')
            ->addButtons([
                Button::create('Sim')->value('Sim'),
                Button::create('Não')->value('Não'),
            ]);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $selectedValue = $answer->getValue(); // will be either 'yes' or 'no'
                $selectedText = $answer->getText(); // will be either 'Of course' or 'Hell no!'
                $this->say('Você respondeu: ' . $selectedText);
                $this->askHabits3();
            }
        });

    }

    public function askHabits3()
    {
        $question = Question::create('Quantas horas por dia você costuma rodar??')
            ->fallback('Eita, que eu não entendi nada...')
            ->callbackId('create_database')
            ->addButtons([
                Button::create('Até 8 horas por dia ')->value('Até 8 horas por dia '),
                Button::create('De 8 até 10 horas por dia')->value('De 8 até 10 horas por dia'),
                Button::create('De 10 até 12 horas por dia')->value('De 10 até 12 horas por dia'),
                Button::create('De 12 até 14 horas por dia')->value('De 12 até 14 horas por dia'),
                Button::create('De 14 até 16 horas por dia ')->value('De 14 até 16 horas por dia'),
                Button::create('Mais de 16 horas por dia')->value('Mais de 16 horas por dia'),
            ]);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $selectedValue = $answer->getValue(); // will be either 'yes' or 'no'
                $selectedText = $answer->getText(); // will be either 'Of course' or 'Hell no!'
                $this->say('Você respondeu: ' . $selectedText);
                $this->askHabits4();
            }
        });


    }

    public function askHabits4()
    {
        $question = Question::create('Você come quantas vezes no dia?')
            ->fallback('Eita, que eu não entendi nada...')
            ->callbackId('create_database')
            ->addButtons([
                Button::create('2 vezes')->value('2 vezes'),
                Button::create('3 vezes')->value('3 vezes'),
                Button::create('4 vezes')->value('4 vezes'),
                Button::create('5 vezes ')->value('5 vezes'),
                Button::create('6 vezes')->value('6 vezes'),
            ]);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $selectedValue = $answer->getValue(); // will be either 'yes' or 'no'
                $selectedText = $answer->getText(); // will be either 'Of course' or 'Hell no!
                $this->say('Você respondeu: ' . $selectedText);
                $this->askHabits5();
            }
        });
    }

    public function askHabits5()
    {
        $question = Question::create('Você costuma dormir em qual parte do dia?')
            ->fallback('Eita, que eu não entendi nada...')
            ->callbackId('create_database')
            ->addButtons([
                Button::create('Manhã')->value('Manhã'),
                Button::create('Tarde')->value('Tarde'),
                Button::create('Noite')->value('Noite'),
                Button::create('Madrugada')->value('Madrugada'),
            ]);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $selectedValue = $answer->getValue(); // will be either 'yes' or 'no'
                $selectedText = $answer->getText(); // will be either 'Of course' or 'Hell no!'
                $this->say('Você respondeu: ' . $selectedText);
                $this->askHabits6();
            }
        });
    }
    public function askHabits6()
    {
        $question = Question::create('Quantas horas você costuma dormir?')
            ->fallback('Eita, que eu não entendi nada...')
            ->callbackId('create_database')
            ->addButtons([
                Button::create('4 horas')->value('4'),
                Button::create('5 horas')->value('5'),
                Button::create('6 horas')->value('6'),
                Button::create('7 horas')->value('7'),
                Button::create('8 horas')->value('8'),
            ]);

        $this->ask($question, function (Answer $answer) {
            // Detect if button was clicked:
            if ($answer->isInteractiveMessageReply()) {
                $selectedValue = $answer->getValue(); // will be either 'yes' or 'no'
                $selectedText = $answer->getText(); // will be either 'Of course' or 'Hell no!'
                $this->say('Você respondeu: ' . $selectedText);
                $this->say('Muito obrigado, agora que já nos conhecemos melhor...');
                $this->askEmailTrue();
            }
        });
    }
}
