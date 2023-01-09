moduleApp.config(['$translateProvider', function ($translateProvider) {
  
    $translateProvider.translations('en', {
      'POSITION': 'Product Designer based in São José dos Campos - Brazil',
      'POSITION_DESC': 'Working with renowned brands, designing customers experiences that are useful, delightful, memorable, simple and improving user behaviours. Balancing users and business goals at every step of the process. ',
      'POSITION_PROJECTS': 'Projects',
      'ABOUT_TITLE': 'About',

      'ABOUT_DESC1': 'Guilherme Paixão, born in Brazil and living in São José dos Campos.',
      'ABOUT_DESC2': 'Working with companies that have UX as part of their process, belief in collaborative working between teams.',
      'ABOUT_DESC3': 'Expertise - discovery research, stakeholder engagements, usability testing sessions, moderated interviews, UX reports, prototyping and collaborative handoff with devs.',
      'ABOUT_DESCA': 'Worked on startups, national companys and freelance on a variety of products.',
      'ABOUT_DESCB': 'Postgraduate in Product Management',

      'CONTACT_US': 'Get in touch!',
      'RESUME': 'Resume',
    });
   
    $translateProvider.translations('br', {
      'POSITION': 'Product Designer de São José dos Campos - Brasil',
      'POSITION_DESC': 'Trabalhando com marcas de renome, desenhando experiências de clientes que sejam úteis, agradáveis, memoráveis, simples e melhorando os comportamentos do usuário. Equilibrar usuários e objetivos de negócios em cada etapa do processo.',
      'POSITION_PROJECTS': 'Projetos',
      'ABOUT_TITLE': 'Sobre',

      'ABOUT_DESC1': 'Morando no Brasil, como designer, estou focado em serviços financeiros como pagamentos, cartão de crédito, programas de fidelidade e recompensas.',
      'ABOUT_DESC2': 'Trabalhar com empresas com UX como parte de seu processo, acredita no trabalho colaborativo entre equipes.',
      'ABOUT_DESC3': 'Expertise - Estratégia de Produto, Ambiente Ágil, Design System, Transferência de produto com desenvolvedores, Estrutura de excelência, Pesquisa de mercado, Priorização de produto, Definição de padrões de Ul, Gestão de stakeholders, Pesquisa de descoberta, Design thinking, Planejamento de OKRs',
      'ABOUT_DESCA': 'Trabalhou com agências e startups internacionais em uma variedade de produtos',
      'ABOUT_DESCB': 'Pós Graduado em Gestão de Produtos, Aluno de Mestrado em Produto.',

      'CONTACT_US': 'Entre em contato',
      'RESUME': 'Currículo',
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sceParameters');  
  
  }]);
  
