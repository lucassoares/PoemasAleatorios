$(document).ready(function(){
	var conteudo = [
		'Palavras são incapazes de expressar todo sentimento que tenho por você. Te amo muito.',
		'A vida é minha. Mas o coração, é seu. O sorriso é meu. Mas o motivo, é você.',
		'Se eu sei o que é o amor é porque você existe em minha vida!',
		'Amor à primeira vista: quando encontrar aquele que é perfeito, tudo que é imperfeito desaparece.',
		'Desde que eu te encontrei, minha vida mudou para melhor.',
		'Você é o melhor dos namorados, o maior dos amigos e o único que eu amo.',
		'Nunca imaginei que algum dia pudesse adormecer com um sorriso nos lábios. Boa noite, meu bem!',
		'Amo você porque me faz feliz e me completa, pois você trouxe aquele pedaço de mim que eu nem sabia que estava faltando.',
		'Se eu pudesse viveria minha vida novamente, só para poder encontrar você mais cedo, e assim amar você mais tempo!',
		'Meu coração implora que eu ganhe coragem para parar de mentir falando que só quero sua amizade!',
		'O casal perfeito não é aquele que nunca tem problemas, mas sim aquele que apesar dos obstáculos sempre permanece juntos.',
		'Minha felicidade não tem preço, tem o seu nome.',
		'Eu amo estar com você, eu amo ficar com você, seu cheirinho me faz viajar, sua voz me faz suspirar.',
		'Posso estar no pior dia da minha vida, mesmo assim vou fazer de tudo para ver você sorrir.',
		'Difícil é amar uma mulher e simultaneamente fazer alguma coisa com juízo.',
		'Quando a distância incomoda, a saudade dói,o sentimento bate,o meu amor por você se explica em lágrimas que caem do meu rosto,ao me lembrar de você, eu te amo!',
		'Onde quer que eu esteja, sempre penso em você. É você quem me torna real e me dá um motivo a mais para alcançar meus objetivos.',
		'Quero que a gente sempre saia para qualquer lugar,sempre converse sobre qualquer coisa, sempre se ajude no que precisar, sempre debata sobre nossa relação e sempre se entenda como só a gente faz! Encararemos o futuro juntos!'
	];
	
	EscolherPoema();
	
	function EscolherPoema(){
		var i = Math.floor((Math.random() * conteudo.length));
		$('#content').html(conteudo[i]);
	}
});