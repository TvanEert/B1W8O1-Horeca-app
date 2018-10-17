function bestelling() 
{
	do{
		v_product = prompt ("Wat wil je toevoegen ? [Bier/Fris/Wijn]");
	
		if (v_product.toLowerCase() == 'bier' || v_product.toLowerCase() == 'fris' || v_product.toLowerCase() == 'wijn')
		{
			v_aantal = prompt ("Hoeveel "+v_product.toLowerCase()+" wil je bestellen?");
			i_herhaal++;
		}
		else
		{
			alert("Geef een geldig product op !!!");
		}
	}while(i_herhaal == 0);
}

bestelling()
