import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { BadgesPage } from '../pages/badges/badges';
import { BotoesPage } from '../pages/botoes/botoes';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { DateTimePage } from '../pages/date-time/date-time';
import { FabPage } from '../pages/fab/fab';
import { GridPage } from '../pages/grid/grid';
import { IconesPage } from '../pages/icones/icones';
import { InputPage } from '../pages/input/input';
import { ListPage } from '../pages/list/list';
import { TogglePage } from '../pages/toggle/toggle';
import { LoadingPage } from '../pages/loading/loading';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { SegmentPage } from '../pages/segment/segment';
import { TabsPage } from '../pages/tabs/tabs';
import { SelectPage } from '../pages/select/select';
import { PaginaPrincipalPage } from '../pages/pagina-principal/pagina-principal';
import { ModalPrincipalPage } from '../pages/modal-principal/modal-principal';
import { SlidesPage } from '../pages/slides/slides';
import { TypographyPage } from '../pages/typography/typography';
import { ChipsPage } from '../pages/chips/chips';
import { PopoverPage } from '../pages/popover/popover';
import { EstilizacaoPage } from '../pages/estilizacao/estilizacao';
import { CameraPage } from '../pages/camera/camera';
import { BarCodePage } from '../pages/bar-code/bar-code';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = LocalizacaoPage;

	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'ActionSheet', component: ActionSheetPage },
			{ title: 'Alert', component: AlertPage },
			{ title: 'Badges', component: BadgesPage },
			{ title: 'Botões', component: BotoesPage },
			{ title: 'Card', component: CardPage },
			{ title: 'Checkbox', component: CheckboxPage },
			{ title: 'Radio', component: RadioPage },
			{ title: 'Range', component: RangePage },
			{ title: 'DateTime', component: DateTimePage },
			{ title: 'Fab', component: FabPage },
			{ title: 'Grid', component: GridPage },
			{ title: 'Icones', component: IconesPage },
			{ title: 'Input', component: InputPage },
			{ title: 'List', component: ListPage },
			{ title: 'Toggle', component: TogglePage },
			{ title: 'Loading', component: LoadingPage },
			{ title: 'Toast', component: ToastPage },
			{ title: 'Toolbar', component: ToolbarPage },
			{ title: 'Segment', component: SegmentPage },
			{ title: 'Tabs', component: TabsPage },
			{ title: 'Select', component: SelectPage },
			{ title: 'Pagina Principal', component: PaginaPrincipalPage },
			{ title: 'Modal Principal', component: ModalPrincipalPage },
			{ title: 'Slides', component: SlidesPage },
			{ title: 'Typography', component: TypographyPage },
			{ title: 'Chips', component: ChipsPage },
			{ title: 'Popover', component: PopoverPage },
			{ title: 'Estilização', component: EstilizacaoPage },
			{ title: 'Camera', component: CameraPage },
			{ title: 'BarCode', component: BarCodePage },
			{ title: 'Localização', component: LocalizacaoPage }
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		//this.nav.setRoot(page.component);
		this.nav.push(page.component)
	}
}
