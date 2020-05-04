import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Background from '~/components/Background';

import Card from '~/components/Card';
import { setTitle } from '~/store/modules/title/actions';

import { Container } from './styles';

const data = [
  {
    id: 1,
    title:
      'Como o maior buraco na camada de ozônio no Polo Norte finalmente se fechou',
    description:
      'Um buraco na camada de ozônio "sem precedentes" na região do Ártico sumiu, e e isso não tem nada a ver com o coronavírus: é consequência de um vórtice polar.',
    image:
      'https://s2.glbimg.com/jwn_pZqWZFZfnLfmQHyF5fcN5GE=/0x0:660x371/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/y/b/c8agVwQvaopEO1kjHwQQ/thumbnail-image001.jpg',
    type: 'G1',
    category: 'Natureza',
  },
  {
    id: 2,
    title:
      "1988 OR2, o asteroide 'potencialmente perigoso' que acaba de passar perto da Terra",
    description:
      "Asteroide gigante, de cerca de 2 km de comprimento, que passou a uma distância de cerca de 16 vezes a distância do nosso planeta até a Lua, é listado como 'potencialmente perigoso'.",
    image:
      'https://s2.glbimg.com/-lp2-VCVn2Ee_U_CsY_3lwNfnx8=/0x0:1220x686/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/v/W/Dssej8Qw2E7ZA6N2c6kA/asteroide.jpg',
    type: 'G1',
    category: 'Ciência e Saúde',
  },
  {
    id: 3,
    title:
      'Primeiro mapa superdetalhado mostra nova perspectiva da superfície da Lua',
    description:
      'Feito a partir da combinação de dados coletados nas missões Apollo e de pesquisas recentes, mapeamento pode servir de guia para futuras missões;',
    image:
      'https://s2.glbimg.com/kRPs9BUd9MhJ0cUd5U21z-2a7U0=/0x0:1400x698/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/D/A/Ab4uowQNmwU4ByBDuY5A/mapa-geologico-lua.jpg',
    type: 'G1',
    category: 'Olha que legal',
  },
  {
    id: 4,
    title:
      'Google lista tipos de golpes na web mais comuns durante a pandemia; veja dicas para não cair neles',
    description:
      'Saiba ainda como fazer videoconferência com segurança e cuidados com doações em lives - G1 mostrou que donos de canais com transmissões fake têm enganado internautas.',
    image:
      'https://s2.glbimg.com/xlQIcM4bV6dq2OxGEDh8pT2932U=/0x0:1200x651/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/6/H/1KSdXLQraiAPt4AsQCrA/golpes-covid.png',
    type: 'G1',
    category: 'Economia',
  },
  {
    id: 5,
    title:
      'Review Streets of Rage 4: clássico dos anos 90 volta com belos gráficos',
    description:
      'Sair na briga de rua nunca foi tão divertido e bonito; confira a análise completa do game',
    image:
      'https://s2.glbimg.com/zOFdG7P1qeuCTteaYtPeY1fQa5k=/0x0:1920x1080/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/P/E/ZIdvlETnA6cX14BCFCbw/streets-of-rage-4-20200428133816.jpg',
    type: 'TechTudo',
    category: 'Review',
  },
  {
    id: 6,
    title:
      'Oito coisas que a Xiaomi vende oficialmente no Brasil e você não sabia',
    description:
      'Fabricante chinesa possui desde escova de dentes até toalhas em seu catálogo; veja detalhes',
    image:
      'https://s2.glbimg.com/dba7G85zPekunPhMiCzuT7q0cVM=/0x0:511x508/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/R/d/WvebsUTCGPZPLIGhFucQ/toalha.png',
    type: 'TechTudo',
    category: 'Listas',
  },
  {
    id: 7,
    title:
      'CBLoL 2020: veja números dos classificados para semifinais do 1º Split',
    description:
      'Vivo Keyd, KaBuM, Flamengo e FURIA conseguiram classificação para playoffs do torneio; times jogam neste sábado (2) e domingo (3)',
    image:
      'https://s2.glbimg.com/smfXeYJq8qRfDiqQwk_Jk0l3AZ8=/0x0:1920x1080/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/2/N/HTpQSqR0u0WBgY6JbOwQ/cblol-2020-regras-datas-times.jpg',
    type: 'TechTudo',
    category: 'Notícias',
  },
  {
    id: 8,
    title:
      'Pokémon GO: como conseguir as pedras de evolução, como Sinnoh e Rei',
    description:
      'Veja como conseguir as pedras de evolução de Pokémon GO para atingir as formas finais de seus monstrinhos e saiba quais criaturas precisam delas',
    image:
      'https://s2.glbimg.com/Di52gLG7y-1EnaDVF5PoNkTAMGo=/0x0:695x390/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/T/i/7BAmrbTbmmvkK1M7XOAw/pokemon-go-como-conseguir-evolucao-pedra-sinnoh-rei-solar-tutorial.jpg',
    type: 'TechTudo',
    category: 'Dicas e tutoriais',
  },
  {
    id: 9,
    title:
      "Babu Santana conta que não viu a filha pequena após confinamento no 'BBB20': 'Ela é grupo de risco'",
    description:
      'Quarto lugar da edição histórica do reality, ator revela como está adaptando a sua vida depois do programa',
    image:
      'https://s2.glbimg.com/ZH9vJ0ASBWYrj5UkIK0gZ9r2JVE=/0x0:1467x2200/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/X/U/SuczLDRIu3WTMfIAt3Gg/artur-meninea-9466.jpg',
    type: 'GShow',
    category: 'Programas',
  },
  {
    id: 10,
    title: "Resumo de 'Fina Estampa': capítulos de 11 a 16 de maio",
    description:
      'Confira o que vai rolar na oitava semana da edição especial da novela das 9, escrita por Aguinaldo Silva',
    image:
      'https://s2.glbimg.com/QuzL0PP_7NM-LN7PKuliPaCnEv8=/0x0:620x465/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/f/3/D4wq9LRmSkVMBo3AWTwg/tereza-cristina-torloni-griselda-lilia-cabral-fina-estampa.jpg',
    type: 'GShow',
    category: 'novelas',
  },
  {
    id: 11,
    title: "Resumo de 'Novo Mundo': capítulos de 11 a 16 de maio",
    description:
      'Confira tudo o que vai rolar na edição especial da novela das 6, escrita por Alessandro Marson e Thereza Falcão, com direção artística de Vinícius Coimbra',
    image:
      'https://s2.glbimg.com/IVRd1BTNolDtQfMByewyKj3V1bs=/0x0:1400x788/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/m/d/RsNpAESJCj7uCPQQUxBQ/1-domitila-pedro.jpg',
    type: 'GShow',
    category: 'Novelas',
  },
  {
    id: 12,
    title:
      'Brasil vence a Espanha no Maracanã lotado e conquista a Copa das Confederações de 2013',
    description:
      'Fred faz dois gols (um deles deitado) e Neymar completa o placar diante dos então campeões do mundo e bicampeões europeus',
    image:
      'https://s2.glbimg.com/8zmx6a1ZD9eTfodf-794OwuhUWA=/0x0:950x600/640x360/smart/s.glbimg.com/es/ge/f/original/2014/05/28/neymar_taca_confederacoes_reu.jpg',
    type: 'Globoesporte',
    category: 'Futebol',
  },
  {
    id: 13,
    title:
      'Qual é a vitória mais espetacular da carreira de Ayrton Senna? Vote!',
    description:
      'Trajetória de tricampeão mundial foi marcada por triunfos históricos. Mas qual foi o maior? Neste domingo, Esporte Espetacular e GloboEsporte.com transmitem GP que deu o primeiro título',
    image:
      'https://s2.glbimg.com/dPZ_PeLNdo5yQG8gzAdfSIuM6_U=/0x0:800x1200/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/Z/h/F1MtBOS6amjfBrp2depQ/ayrton-senna-brasil.jpg',
    type: 'Globoesporte',
    category: 'Motor',
  },
];

export default function Feed({ route, navigation }) {
  const [news, setNews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(setTitle('Globo Hub'));
    });
  }, [dispatch, navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params.type === 'Feed') {
        setNews(data);
      } else {
        setNews(data.filter(item => item.type === route.params.type));
      }
    });

    return unsubscribe;
  }, [navigation, route.params.type]);

  return (
    <Background>
      <Container
        data={news}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
            type={item.type}
            category={item.category}
          />
        )}
      />
    </Background>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
};
