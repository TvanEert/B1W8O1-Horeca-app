var v_product;
var v_aantal;
var v_bier = 0;
var v_wijn = 0;
var v_fris = 0;
var i_hoofdlus = 0;
var i_herhaal = 0;
var i_control = 0;

const c_bier = 3.00;
const c_fris = 2.49;
const c_wijn = 3.49;


function b_drinken() 
{
	do{
		var v = prompt ("Wil je drinken toevoegen ? [1] = toevoegen [2] = stop")
		if (v == '2') 
		{
			i_hoofdlus++;
		}
		else if (v == '1') 
		{
			do{
				v_product = prompt ("Wat wil je toevoegen ? [Bier/Fris/Wijn]");
	
				if (v_product.toLowerCase() == 'bier' || v_product.toLowerCase() == 'fris' || v_product.toLowerCase() == 'wijn')
				{
					do{
						v_aantal = Number(prompt ("Hoeveel "+v_product.toLowerCase()+" wil je bestellen?"));
						if (v_aantal > 0) 
						{
							i_control++;
						}
						else if (v_aantal == 0) 
						{
							alert("Getal moet groter zijn dan 0 !!!");
						}
						else
						{
							alert("Invoer moet een getal zijn");
						}
					}while(i_control == 0)

					i_control = 0;

					if (v_product.toLowerCase() == 'bier') {v_bier = v_bier + v_aantal}
					else if (v_product.toLowerCase() == 'wijn') {v_wijn = v_wijn + v_aantal}
					else if (v_product.toLowerCase() == 'fris') {v_fris = v_fris + v_aantal}

					i_herhaal++;
				}
				else
				{
					alert("Geef een geldig product op !!!");
				}
			}while(i_herhaal == 0);

			i_herhaal = 0;
		}
		else
		{
			alert("Vul een geldig antwoord in !!!");
		}

	}while(i_hoofdlus == 0);

	i_hoofdlus = 0;
}

var b_8 = 0;
var b_16 = 0;

const c_8 = 5.00;
const c_16 = 8.49;



function b_eten() 
{
	do{
		var v = prompt ("Wil je eten toevoegen ? [1] = toevoegen [2] = stop")
		if (v == '2') 
		{
			i_hoofdlus++;
		}
		else if (v == '1')
		{
			do{
				v_product = prompt ("Hoeveel bitterballen wil je toevoegen ? [8/16]");
	
				if (v_product == '8' || v_product == '16')
				{
					do{
						v_aantal = Number(prompt ("Hoeveel schalen van "+v_product+" bitterballen wil je bestellen?"));
						if (v_aantal > 0) 
						{
							i_control++;
						}
						else if (v_aantal == 0) 
						{
							alert("Getal moet groter zijn dan 0 !!!");
						}
						else
						{
							alert("Invoer moet een getal zijn");
						}
					}while(i_control == 0)

					i_control = 0;

					if (v_product == '8') {b_8 = b_8 + v_aantal}
					else if (v_product == '16') {b_16 = b_16 + v_aantal}

					i_herhaal++;
				}
				else
				{
					alert("Geef een geldig product op !!!");
				}
			}while(i_herhaal == 0);

			i_herhaal = 0;
		}
		else
		{
			alert("Vul een geldig antwoord in !!!");
		}
	
	}while(i_hoofdlus == 0);
	
	i_hoofdlus = 0;
}

function berekening()
{
	var v_bierprijs = v_bier * c_bier;
	var v_frisprijs = v_fris * c_fris;
	var v_wijnprijs = v_wijn * c_wijn;
	var v_8prijs = b_8 * c_8;
	var v_16prijs = b_16 * c_16;
	var v_total = v_bierprijs + v_frisprijs + v_wijnprijs + v_8prijs + v_16prijs; 

    v_bierprijs = v_bierprijs.toFixed(2);
	v_frisprijs = v_frisprijs.toFixed(2);
    v_wijnprijs = v_wijnprijs.toFixed(2);
    v_8prijs = v_8prijs.toFixed(2);
    v_16prijs = v_16prijs.toFixed(2);
    v_total = v_total.toFixed(2);

    document.getElementById("bon").style.display = "block";
 
	document.write ('Bon')
    document.write ('<br><br>Aantal Bier: ' + v_bier )
    document.write ('<br>Prijs Bier: &euro; '+ v_bierprijs)
    document.write ('<br><br>Aantal Fris: ' + v_fris )
    document.write ('<br>Prijs Fris: &euro; ' + v_frisprijs )
    document.write ('<br><br>Aantal Wijn: ' + v_wijn )
    document.write ('<br>Prijs Wijn: &euro; ' + v_wijnprijs )
    document.write ('<br><br>Aantal schalen 8: ' + b_8 )
    document.write ('<br>Prijs bitterballen 8: &euro; '+ v_8prijs )
    document.write ('<br><br>Aantal schalen 16: ' + b_16 )
    document.write ('<br>Prijs bitterballen 16: &euro; '+ v_16prijs )
    document.write ('<hr>Totaal: &euro; ' + v_total )
}

b_drinken();
b_eten();
berekening();

