import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 'v2v-job',
        title: 'Front-end development',
        category: 'UI',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus aspernatur est culpa obcaecati ut quos at.',
        image: 'http://denistoledo.com.br/images/portfolio/ui-v2v.jpg',
        skills: 'html, css'
      },
      {
        id: 'ember-job',
        title: 'Studies',
        category: 'Frameworks',
        description: 'Non necessitatibus aspernatur est culpa obcaecati ut quos at. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'http://denistoledo.com.br/images/portfolio/ember-js-super-rentals.jpg',
        skills: 'javascript, ember.js'
      },
      {
        id: 'blue-job',
        title: 'Logo design',
        category: 'Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus aspernatur est culpa obcaecati ut quos at.',
        image: 'http://denistoledo.com.br/images/portfolio/logo-blue-sky-drone.jpg',
        skills: 'adobe illustrator'
      },
    ]
  }
});
