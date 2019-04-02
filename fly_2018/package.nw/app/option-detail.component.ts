import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Option } from './settings';
import { OptionService } from './settings.service';

@Component({
    selector: 'option-d',
    templateUrl: './option-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class OptionDetailComponent implements OnInit {
    option: Option;

    constructor(
        private optionService: OptionService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit(): void {

        this.route.params
            .switchMap((params: Params) => this.optionService.getOption(+params['id']))
            .subscribe(option => this.option = option);
    }

    save(): void {
        this.optionService.update(this.option)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
