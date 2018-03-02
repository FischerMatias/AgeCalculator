import {Component, OnInit} from '@angular/core';
import {CountryDataService} from '../../services/country.data.service';
import {VisitorBuilder} from './model/visitorbuilder';
import {IServiceCountry} from '../../shared/service.interface';
import {LoadingManager} from '../../shared/util/loading-manager';
import {StringUtil} from '../../shared/util/stringUtil';
import {Visitor} from './model/visitor';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-years-calculator',
  templateUrl: './years-calculator.component.html',
  styleUrls: ['./years-calculator.component.scss']
})
export class YearsCalculatorComponent implements OnInit {

  visitorBuilder: VisitorBuilder = new VisitorBuilder();
  countries: IServiceCountry[];
  loadingManager: LoadingManager = new LoadingManager();
  selectedVisitor: Visitor;
  shownVisitors: Visitor[] = [new Visitor('Prueba', 'Argentina', new Date(1990, 6, 17)),
                              new Visitor('Clickeame', 'Francia', new Date(1986, 3, 12))];

  constructor(private countryService: CountryDataService) {

  }

  ngOnInit() {
    this.loadingManager.oneLoading();
    this.countryService.GetAll().subscribe((res: IServiceCountry[]) => {
      this.countries = res;
      this.loadingManager.oneLoaded();
    });
  }

  Empty(array: string) {
    return StringUtil.isNullOrEmpty(array);
  }

  Exists(obj: any){
    return !isNullOrUndefined(obj);
  }

  selectOne(visitor: Visitor){
    this.shownVisitors.forEach(v => v.unselect());
    visitor.select();

    this.selectedVisitor = visitor;

  }

  onGreet() {
    const result = this.visitorBuilder.buildResult();

    this.shownVisitors.push(result);

    this.selectOne(result);
  }

  onSelectedVisitor(visitor: Visitor) {
    this.selectOne(visitor);
  }
}
