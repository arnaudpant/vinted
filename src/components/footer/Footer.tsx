import FooterPrivacySection from './FooterPrivacySection';
import FooterSocialSectionApp from './FooterSocialSectionApp';
import FooterSocialSectionMedia from './FooterSocialSectionMedia';
import FooterSectionItem from './FooterSectionItem';

const Footer = () => {
  return (
    <footer className="bg-stone-100 px-5 py-4">
      <div className="container divide-y">
        <ul className="flex flex-col justify-between sm:flex-row">
          <FooterSectionItem
            label="Vinted"
            linkLabels={[
              'A propos de Vinted',
              'Carrière',
              'Le développement durable',
              'Presse',
              'Publicités',
            ]}
          />
          <FooterSectionItem
            label="Découvrir"
            linkLabels={[
              'Comment ça marche ?',
              "Vérification de l'article",
              'Applications mobiles',
              'Tableau de bord',
              'Vinted Pro',
              'Guide Vinted Pro',
            ]}
          />
          <FooterSectionItem
            label="Aide"
            linkLabels={[
              "Centre d'aide",
              'Vendre',
              'Acheter',
              'Confiance et sécurité',
            ]}
          />
          <FooterSectionItem label="Communauté" linkLabels={['Forum']} />
        </ul>
        <div className="flex flex-col-reverse items-center justify-between p-3 sm:flex-row">
          <FooterSocialSectionMedia />
          <FooterSocialSectionApp />
        </div>
        <FooterPrivacySection />
      </div>
    </footer>
  );
};

export default Footer;
