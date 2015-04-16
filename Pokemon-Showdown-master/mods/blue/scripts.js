exports.BattleScripts = {
                        //Chimecho

		this.modData('Pokedex', 'chimecho').types = ['Psychic', 'Fairy'];
		//this.modData('Learnsets', 'chimecho').learnset.NO CHANGE = ['5L100'];
                        this.modData('Pokedex', 'chimecho').abilities['1'] = 'Prankster';
                        this.modData('Pokedex', 'chimecho').baseStats = {hp:85, atk:50, def:80, spa:95, spd:80, spe:90};

                        //Dunsparce

		this.modData('Pokedex', 'dunsparce').types = ['Normal', 'Fairy'];
		this.modData('Learnsets', 'dunsparce').learnset.hornleech = ['5L100'];
                        this.modData('Learnsets', 'dunsparce').learnset.poisonfang = ['5L100'];
                        this.modData('Learnsets', 'dunsparce').learnset.sacredfire = ['5L100'];
                        //this.modData('Pokedex', 'dunsparce').abilities['1'] = 'NO CHANGE';
                        this.modData('Pokedex', 'dunsparce').baseStats = {hp:105, atk:80, def:65, spa:50, spd:75, spe:40};

                        //Farfetch'd

		//this.modData('Pokedex', 'farfetchd').types = ['NO CHANGE'];
		this.modData('Learnsets', 'farfetchd').learnset.boneclub = ['5L100'];
                        this.modData('Learnsets', 'farfetchd').learnset.focusenergy = ['5L100'];
                        this.modData('Pokedex', 'farfetchd').abilities['0'] = 'Sniper';
                        this.modData('Pokedex', 'farfetchd').abilities['1'] = 'Super Luck';
                        this.modData('Pokedex', 'farfetchd').baseStats = {hp:65, atk:75, def:65, spa:58, spd:65, spe:110};

                        //Ledian

		this.modData('Pokedex', 'ledian').types = ['Bug', 'Fighting'];
		this.modData('Learnsets', 'ledian').learnset.attackorder = ['5L100'];
                        this.modData('Learnsets', 'ledian').learnset.bulletpunch = ['5L100'];
                        this.modData('Learnsets', 'ledian').learnset.firepunch = ['5L100'];
                        this.modData('Learnsets', 'ledian').learnset.volttackle = ['5L100'];
                        //this.modData('Pokedex', 'ledian').abilities['1'] = 'NO CHANGE';
                        this.modData('Pokedex', 'ledian').baseStats = {hp:65, atk:120, def:60, spa:55, spd:100, spe:85};

                        //Ludicolo

                        //this.modData('Pokedex', 'ludicolo').types = [NO CHANGE];
		this.modData('Learnsets', 'ludicolo').learnset.ingrain = ['5L100'];
                        this.modData('Pokedex', 'ludicolo').abilities['H'] = 'Hydration';
                        this.modData('Pokedex', 'ludicolo').baseStats = {hp:80, atk:75, def:90, spa:75, spd:100, spe:50};

                        //Marowak

		this.modData('Pokedex', 'marowak').types = ['Ground', 'Ghost'];
		this.modData('Learnsets', 'marowak').learnset.headsmash = ['5L100'];
                        this.modData('Learnsets', 'marowak').learnset.phantomforce = ['5L100'];
                        this.modData('Learnsets', 'marowak').learnset.shadowsneak = ['5L100'];
                        this.modData('Pokedex', 'marowak').abilities['1'] = 'Parental Bond';
                        this.modData('Pokedex', 'marowak').baseStats = {hp:60, atk:40, def:90, spa:50, spd:130, spe:35};

                        //Watchog

                        //this.modData('Pokedex', 'watchog').types = ['NO CHANGE'];
		this.modData('Learnsets', 'watchog').learnset.blizzard = ['5L100'];
                        this.modData('Learnsets', 'watchog').learnset.fireblast = ['5L100'];
                        this.modData('Pokedex', 'watchog').abilities['0'] = 'Compoundeyes';
                        this.modData('Pokedex', 'watchog').abilities['1'] = 'Sheer Force';
                        this.modData('Pokedex', 'watchog').baseStats = {hp:100, atk:110, def:70, spa:85, spd:70, spe:90};
}
