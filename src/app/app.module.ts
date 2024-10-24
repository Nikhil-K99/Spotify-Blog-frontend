import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopicSearchComponent } from './post/topic-search/topic-search/topic-search.component';
import { NebularModule } from './nebular/nebular.module';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { TopicComponent } from './shared/topic/topic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VoteComponent } from './shared/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopicSearchComponent,
    CreatePostComponent,
    PostTileComponent,
    TopicComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NebularModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
