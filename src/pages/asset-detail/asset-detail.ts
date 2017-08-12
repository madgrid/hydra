import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

/**
 * Generated class for the AssetDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-asset-detail',
  templateUrl: 'asset-detail.html',
})
export class AssetDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }
}
