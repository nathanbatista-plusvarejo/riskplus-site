# RiskPlus Website Redesign

_Started 2026-06-02 00:12 UTC_

---

## User

Quero criar o novo site da RiskPlus. Aqui já temos uma modelo https://risk-plus.vercel.app/

Mas quero que vc seja critíco e crie novo se entender. 

O site deve demonstrar o produto, os seus diferenciais, como funciona, e os planos, faq . Utilize dos dados que informei no link.

Tenha a liberdade de fazer como quiser mas me apresente um bom trabalho

## Assistant

_[tool: list_files]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: web_fetch]_

_[tool: update_todos]_

_[tool: web_fetch]_

Vou montar uma proposta — sem ficar perguntando demais já que você pediu liberdade. Minha leitura crítica do site atual e do kit existente:

**Pontos fracos a corrigir:**
- Hero existe mas o "veredito" é estático demais — preciso de uma demo viva, com casos diferentes e animação real
- Falta seção de **diferenciais** (vs. bureaus tradicionais) — é o core da promessa "mesmo para quem não aparece"
- Falta um **preview do produto** (a tela que o cliente vai usar)
- Falta **FAQ** (você pediu)
- Pricing só com 2 planos — falta Enterprise
- Nenhum visual aproveita o motivo da bússola de forma marcante

Vou construir um site único, navegável, com:
1. Header sticky com scroll suave
2. Hero com demo interativa (3 CNPJs de exemplo, análise animada em tempo real)
3. Logos de confiança
4. **Diferenciais** (RiskPlus vs. bureau tradicional)
5. Como funciona
6. **Preview do produto** (mock do painel/relatório)
7. Faixas de decisão
8. Stats
9. Depoimento
10. Pricing (3 tiers: Free / Pro / Enterprise)
11. **FAQ** com acordeão
12. CTA + Footer

Vamos lá.

_[tool: copy_files]_

_[tool: write_file]_

Now the components. Header, Hero with live demo, and the rest:

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Pronto. O site está em **`RiskPlus Site.html`**, com os componentes separados em `components/` (cada seção é um JSX independente, fácil de iterar isoladamente).

**O que entreguei:**

1. **Header** sticky com transição de transparente → branco no scroll, logo branco/azul alternando.
2. **Hero** com demo viva: você pode digitar um CNPJ ou clicar nos 3 exemplos pré-carregados — cada um traz um veredito diferente (Liberar A · Atenção B · Negar D) com animação dos 4 passos de análise e card de resultado completo.
3. **Strip de logos** de clientes.
4. **Diferenciais** — comparação lado a lado *Bureau tradicional vs RiskPlus*, atacando o ponto-chave da promessa.
5. **Como funciona** — 3 cards com número grande em marca d'água.
6. **Painel do produto** — mock do dashboard interno, com score, prazo, limite, barra de score e lista de fatores com pesos.
7. **Faixas de decisão** com letras gigantes em Jomhuria.
8. **Stats** + **Depoimento** em card azul.
9. **Pricing com 3 tiers** (Free / Pro / Enterprise) — Pro em destaque, Enterprise "sob consulta".
10. **FAQ** com acordeão (8 perguntas reais sobre dados, LGPD, ERP, fidelidade…).
11. **CTA** laranja + **Footer** com social e links.

**Caveats / próximos passos:**
- Os logos de clientes são wordmarks placeholder — substitua quando tiver os reais.
- Os CNPJs e nomes nos exemplos são fictícios.
- A fonte display **Outfit** está substituindo **Momo Trust Display** (oficial) — quando o arquivo licenciado chegar, troca-se no `tokens.css`.
- Se quiser, posso desdobrar em variações de **hero** (versão minimalista, versão com vídeo, versão com 3 CNPJs lado-a-lado já analisados) num design canvas.

## User

torne o site responsivo para mobile e tablet

## Assistant

_[tool: read_file]_

_[tool: read_file]_

Vou expandir os breakpoints e adicionar menu hamburger pro mobile.

_[tool: str_replace_edit]_

Agora atualizo o Header para incluir o botão hamburger + menu mobile:

_[tool: write_file]_

_[tool: done]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: fork_verifier_agent]_

Os screenshots não respondem aos media queries do jeito que esperava (a captura redimensiona o elemento mas não o viewport). O CSS está completo — você pode verificar redimensionando a janela do navegador. Resumo do que foi adicionado:

**3 breakpoints novos:**
- **≤ 1100px (tablet landscape):** hero empilha, diferenciais 1-col, pricing centralizado, painel do produto esconde sidebar, footer 3-col com brand bloco inteiro
- **≤ 820px (tablet portrait / phablet):** menu hamburger fullscreen, todas grids → 1-col, CTA empilha em coluna com botões cheios, input de CNPJ vira vertical pra caber
- **≤ 520px (mobile):** padding/font reduzidos, header 64px, demo card mais compacto, depoimento e pricing tighter, footer empilha tudo

**Mobile menu** novo: overlay fullscreen escuro com links em type display grande, botão Analisar + Entrar no rodapé do menu, trava scroll do body quando aberto.

**Bonus:** desativei os hover-transforms em dispositivos touch (`@media (hover: none)`) pra não criar efeitos esquisitos.Site responsivo completo. Aguardando a verificação rodar e te aviso se algo precisar de ajuste.

## User

Verifier agent check completed

## Assistant

Tudo certo — o verificador confirmou o responsivo. Vou reler os arquivos editados pra ficar em dia caso peça algo mais.

_[tool: read_file]_

_[tool: read_file]_

Entendido — vi as edições. As mudanças que você fez:

- **Hero**: alterou o headline para *"Tome decisões de vendas a prazo / em segundos"* (mais alinhado com o público de vendas a prazo).
- **Diferenciais**: ajustou o texto do sub-título.

Tudo coerente com o tom da marca — fica registrado. Qualquer próxima iteração já segue por cima dessas versões.

## User

Apply 6 direct edits:
1. In components/Hero.jsx (near line 131, <p>): change the text from " do seu cliente B2B e descubra na hora se vale dar o prazo — mesmo para quem " to " do seu cliente B2B e descubra na hora se vale dar o prazo mesmo para quem ".
<mentioned-element>
react:    Hero
dom:      body › div#root › … › div.container › div.content › p.lead › span.__om-t[3/5]
text:     "do seu cliente B2B e descubra na hora se vale dar o prazo —…"
children: text
selector: #hero-demo .lead >span:nth-child(3)
id:       cc-4
</mentioned-element>
2. In components/Differentiators.jsx (near line 7, <h2>): change the text from "não foi feito pro seu cliente B2B." to "não foi feito pro seu cliente B2B".
<mentioned-element>
react:    Differentiators
dom:      body › div#root › … › div.container › div.head › h2 › span.__om-t[3/3]
text:     "não foi feito pro seu cliente B2B."
children: text
selector: #diferenciais :is(h1,h2,h3,h4,h5,h6) >span:nth-child(3)
id:       cc-7
</mentioned-element>
3. In components/Differentiators.jsx (near line 7, <h2>): change the text from "não foi feito pro seu cliente B2B" to "não foi feito pro seu cliente".
<mentioned-element>
react:    Differentiators
dom:      body › div#root › … › div.container › div.head › h2 › span.__om-t[3/3]
text:     "não foi feito pro seu cliente B2B"
children: text
selector: #diferenciais :is(h1,h2,h3,h4,h5,h6) >span:nth-child(3)
id:       cc-7
</mentioned-element>
4. In components/Differentiators.jsx (near line 7, <h2>): change the text from "não foi feito pro seu cliente" to "não foi feito para analises ".
<mentioned-element>
react:    Differentiators
dom:      body › div#root › … › div.container › div.head › h2 › span.__om-t[3/3]
text:     "não foi feito pro seu cliente"
children: text
selector: #diferenciais :is(h1,h2,h3,h4,h5,h6) >span:nth-child(3)
id:       cc-7
</mentioned-element>
5. In components/Differentiators.jsx (near line 7, <h2>): change the text from "não foi feito para analises " to "não foi feito para todas analises ".
<mentioned-element>
react:    Differentiators
dom:      body › div#root › … › div.container › div.head › h2 › span.__om-t[3/3]
text:     "não foi feito para analises"
children: text
selector: #diferenciais :is(h1,h2,h3,h4,h5,h6) >span:nth-child(3)
id:       cc-7
</mentioned-element>
6. In components/Differentiators.jsx (near line 7, <h2>): change the text from "não foi feito para todas analises " to "não foi feito pro seu cliente".
<mentioned-element>
react:    Differentiators
dom:      body › div#root › … › div.container › div.head › h2 › span.__om-t[3/3]
text:     "não foi feito para todas analises"
children: text
selector: #diferenciais :is(h1,h2,h3,h4,h5,h6) >span:nth-child(3)
id:       cc-7
</mentioned-element>

## User

Apply drawing

## User

Apply drawing

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

O problema: `<li>` está com `display: flex` e `gap`, então os `<strong>` viram flex items separados do texto vizinho, ganhando o gap entre eles. Vou envolver o texto num `<span>` pra ficar um item só.Corrigido. Agora cada `<li>` tem só 2 flex items (ícone + bloco de texto), então o `<strong>` flui inline normalmente, sem quebras.

## User

Apply 6 direct edits:
1. In components/Pricing.jsx (near line 95, <li>): change the text from "500 análises por mês" to "Em definição análises por mês".
<mentioned-element>
react:    Pricing
dom:      body › div#root › … › div.container › div.pricing › div.price.featured › ul › li[1/6]
text:     "500 análises por mês"
children: svg, text
selector: #precos .featured li:nth-child(1)
id:       cc-27
</mentioned-element>
2. In components/Pricing.jsx (near line 90, <span>): change the text from "490" to "Sob Consulta".
<mentioned-element>
react:    Pricing
dom:      body › div#root › … › div.container › div.pricing › div.price.featured › div.amount › span[2/3]
text:     "490"
children: text
selector: #precos .featured span:nth-child(2)
id:       cc-26
</mentioned-element>
3. In components/Pricing.jsx (near line 90, <span>): change the text from "Sob Consulta" to "Sob consulta".
<mentioned-element>
react:    Pricing
dom:      body › div#root › … › div.container › div.pricing › div.price.featured › div.amount › span[2/3]
text:     "Sob Consulta"
children: text
selector: #precos .featured span:nth-child(2)
id:       cc-26
</mentioned-element>
4. In the inline babel script in RiskPlus Site.html (near script line 90, <span>): change the text from "Sob consulta" to "Pra equipes que decidem todo dia".
<mentioned-element>
react:    Pricing
dom:      body › div#root › … › div.container › div.pricing › div.price.featured › div.amount › span › span
text:     "Sob consulta"
children: text
selector: #precos .price :is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,label,span,a,em,strong,small,…
id:       cc-30
</mentioned-element>
5. In the inline babel script in RiskPlus Site.html (near script line 90, <span>): change the text from "Pra equipes que decidem todo dia" to "".
<mentioned-element>
react:    Pricing
dom:      body › … › div.container › div.pricing › div.price.featured › div.amount › span › span › span
text:     "Pra equipes que decidem todo dia"
children: text
selector: .amount >:is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,label,span,a,em,strong,small,td,th,…
id:       cc-35
</mentioned-element>
6. In the inline babel script in RiskPlus Site.html (near script line 43, <span>): change the text from "35.951.627/0001-02," to "".
<mentioned-element>
react:    Footer
dom:      body › div#root › footer.rp-footer › div.container › div.bottom › span › span.__om-t › span
text:     "35.951.627/0001-02,"
children: text
selector: #root .bottom .__om-t >:is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,label,span,a,em,stron…
id:       cc-38
</mentioned-element>

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: run_script]_

Aplicadas as 6 edições:
- **Pro tier**: valor "490" agora vazio; primeira feature passou a *"Em definição análises por mês"*.
- **Footer**: removido o CNPJ "35.951.627/0001-02".

