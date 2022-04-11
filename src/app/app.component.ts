import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Resume - Hung Vo";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Cloud Engineer, Security Engineer, DevOps Engineer, Hung Vo Live Resume, Hung Vo Resume, Hung Vo CV, Curriculum Hung Vo , Hung live resume" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Hung Vo" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2022-04-11", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm DevOps/Cloud/Security Engineer with 10 years expreriences working with various cloud & technology. Find out more about me!" }
    );
  }
}
