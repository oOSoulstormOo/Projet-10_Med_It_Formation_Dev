# Présentation du projet n°10 de la formation de développeur Wordpress d'Openclassrooms.

![image](https://github.com/user-attachments/assets/c432fb42-7930-43e9-9754-a89e693a22dd)

![image](https://github.com/user-attachments/assets/d6957749-b019-4f38-a0f6-371f1e354fd3)



 # La mission :

Exercice réalisé dans le cadre de ma formation auprès d'Openclassrooms.

Dans le rôle de développeur WordPress en freelance, je réponds a l’appel urgent de MedIt, qui une PME spécialisée dans les systèmes informatiques sur mesure pour le secteur médical, afin de réparer leur site.

Après avoir reçu tous les détails pour pouvoir importer et installer le site en local j’ai pu constater que :

° Le site ne fonctionnait pas et afficher une erreur critique.

° Impossibilité de démarrer Elementor pour éditer les pages.

° La popup ne se fermer pas.

° Le formulaire de contact dans la popup ne s’afficher pas.

° Le lien google maps dans la popup ne fonctionner pas.

° Le bouton de contact ne s’afficher pas dans le menu.

# Pour ce faire :

Pour réparer le site j’ai procédé selon les étapes suivantes:

° Configuration du mode débogage dans le fichier wp_config.php du site pour qu’il affiche les erreurs dans le fichier debug.log.

° Après constatation de certaines erreurs liées aux plugins installés dans le site, j’ai procédé à leurs mis à jour, ainsi qu'à la mise à jour du thème parent.

° Désactivation de certain plug-in qui entrainaît des erreurs.

° Réprise d'une fonction répeter qui entrainait un bug qiu empêchait le site de s'afficher (présence dans plusieurs fichiers).

° Réctification du code qui fait le lien avec la carte de Google Maps.

° Création d'un script pour fermer la popup au clic sur la croix et suppression du script défaillant.

° Réctification du code du [shortcode] pour l’affichage du formulaire de contact.

Après toutes ces rectifications le site est devenu fonctionnel avec l’éditeur Elementor qui se charge normalement sur toutes les pages à éditer.
