# Guia de Contribuição e Colaboração

Obrigado por considerar contribuir para o **PortfolioHUB**! 

Este documento (exigido como parte das práticas de "Compartilhamento e Controle de Acesso com GitHub") descreve o fluxo de trabalho para manter a qualidade e a segurança do código.

## 1. Controle de Acesso

O repositório principal está configurado com as seguintes regras de proteção na branch `main`:
- **Pull Requests (PRs) obrigatórios:** Nenhum código pode ser enviado diretamente (commit) para a `main`.
- **Revisão obrigatória:** Pelo menos uma aprovação é necessária antes do merge.
- **Resolução de conflitos:** As conversas e conflitos devem ser resolvidos antes de o código ser integrado.

## 2. Fluxo de Trabalho (Branching Strategy)

Para contribuir, siga o fluxo abaixo:

1. **Faça um Fork** do projeto (caso não tenha acesso de colaborador direto).
2. **Crie uma Branch** para sua feature ou correção:
   ```bash
   git checkout -b feature/minha-nova-funcionalidade
   ```
   *Dica de nomenclatura:* use prefixos como `feature/`, `bugfix/`, `hotfix/` ou `docs/`.
3. **Faça os Commits** descrevendo de forma clara as alterações:
   ```bash
   git commit -m "feat: adiciona componente de contato"
   ```
4. **Faça o Push** para a sua branch:
   ```bash
   git push origin feature/minha-nova-funcionalidade
   ```
5. **Abra um Pull Request (PR)** apontando para a branch `main` deste repositório original.

## 3. Padrões de Código
- Certifique-se de que o código segue as diretrizes do ESLint configuradas no projeto.
- Teste a aplicação localmente (`npm run dev`) antes de abrir o PR para garantir que nada foi quebrado.
- Se o seu PR introduzir mudanças visuais, adicione capturas de tela (screenshots) na descrição do PR.

## 4. Relato de Bugs e Problemas de Segurança
- **Bugs gerais e melhorias:** Abra uma *Issue* pública detalhando o problema, passos para reproduzir e comportamento esperado.
- **Vulnerabilidades de segurança:** Por favor, NÃO abra uma Issue pública. Consulte nosso arquivo `SECURITY.md` para instruções de reporte confidencial.
