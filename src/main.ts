import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializePicard } from 'picard-js/client';

initializePicard({
  feed: 
    {
      'nfRemote': 'http://localhost:4202/remoteEntry.json'
    }
});

// initFederation({
//   'nfRemote': 'http://localhost:4202/remoteEntry.json'
// })
//   .catch(err => console.error(err))
//   .then(_ => import('./bootstrap'))
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
