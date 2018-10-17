var v_product;
var v_aantal;
var v_bier = 0;
var v_wijn = 0;
var v_fris = 0;
var t_herhaal = 0;
var i_herhaal = 0;

function bestellen() 
{
	do{
		var v = prompt ("Wil je een bestelling toevoegen ? [toevoegen/stop]")
		if (v.toLowerCase() == 'stop') 
		{
			t_herhaal++;
		}
		else if (v.toLowerCase() == 'toevoegen') 
		{
			do{
				v_product = prompt ("Wat wil je toevoegen ? [Bier/Fris/Wijn]");
	
				if (v_product.toLowerCase() == 'bier' || v_product.toLowerCase() == 'fris' || v_product.toLowerCase() == 'wijn')
				{
					v_aantal = Number(prompt ("Hoeveel "+v_product.toLowerCase()+" wil je bestellen?"));
					if (v_product.toLowerCase() == 'bier') {v_bier = v_bier + v_aantal}
					else if (v_product.toLowerCase() == 'wijn') {v_wijn =v_wijn + v_aantal}
					else if (v_product.toLowerCase() == 'fris') {v_fris = v_fris + v_aantal}

					i_herhaal++;
				}
				else
				{
					alert("Geef een geldig product op !!!");
				}
			}while(i_herhaal == 0);
		}
		else
		{
			alert("Vul een geldig antwoord in !!!");
		}

	}while(t_herhaal == 0);
}

bestellen();