// The controller

function SearchController($scope){

	$scope.items = [
		{'id': '0',
	    'title': 'Tatcha Camellia Cleansing Oil Face Wash',
	    'image': 'http://ecx.images-amazon.com/images/I/31vmEb7lWrL._SL160_.jpg',
	    'price': '$48.00',
	    'url': 'http://www.amazon.com/TATCHA-Camellia-Cleansing-Face-Wash/dp/B00E5DPP62%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00E5DPP62'
	},
    {'id': '1',
	    'title': 'Tatcha Classic Rice Enzyme Powder Exfoliant',
	    'image': 'http://ecx.images-amazon.com/images/I/419cpgu7pcL._SL160_.jpg',
	    'price': '$65.00',
	    'url': 'http://www.amazon.com/TATCHA-Classic-Enzyme-Powder-Exfoliant/dp/B00IA6MRI4%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00IA6MRI4'	
	      },
    {'id': '2',
        'title': 'Tatcha Original Aburatorigami',
        'image': 'http://ecx.images-amazon.com/images/I/41Dgvwn7W5L._SL160_.jpg',
        'price': '$12.00',
        'url': 'http://www.amazon.com/Tatcha-Original-Aburatorigami/dp/B003D79TEA%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB003D79TEA'
          },
    {'id': '3',
        'title': 'Tatcha Luminous Dewy Skin Mist Travel Size 0.4 oz',
        'image': 'http://ecx.images-amazon.com/images/I/41qWPccoquL._SL160_.jpg',
        'price': '$29.00',
        'url': 'http://www.amazon.com/Tatcha-LUMINOUS-DEWY-SKIN-TRAVEL/dp/B00W66NRME%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00W66NRME'       
          },
    {'id': '4',
        'title': 'Tatcha Luminous Dewy Skin Mist',
        'image': 'http://ecx.images-amazon.com/images/I/21NBESVRiAL._SL160_.jpg',
        'price': '$61.05',
        'url': 'http://www.amazon.com/Tatcha-Luminous-Dewy-Skin-Mist/dp/B015LGI3T2%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB015LGI3T2' 
          },  
    {'id': '5',
        'title': 'Tatcha Deep Rice Enzyme Powder Exfoliant',
        'image': 'http://ecx.images-amazon.com/images/I/41lQCItB4aL._SL160_.jpg',
        'price': '$65.00',
        'url': 'http://www.amazon.com/TATCHA-Deep-Enzyme-Powder-Exfoliant/dp/B00IA6MTTQ%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00IA6MTTQ' 
          },    
    {'id': '6',
        'title': 'Tatcha RITUAL DISCOVERY KIT Normal to Combination Skin',
        'image': 'http://ecx.images-amazon.com/images/I/411jXrUd3eL._SL160_.jpg',
        'price': '$85.00',
        'url': 'http://www.amazon.com/Tatcha-RITUAL-DISCOVERY-Normal-Combination/dp/B016YP74SK%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB016YP74SK' 
          },    
    {'id': '7',
        'title': 'Gentle Rice Enzyme Powder for Sensitive Skin (Cleanser and Exfoliant)',
        'image': 'http://ecx.images-amazon.com/images/I/41C%2BcYBNPqL._SL160_.jpg',
        'price': '$65.00',
        'url': 'http://www.amazon.com/Gentle-Enzyme-Sensitive-Cleanser-Exfoliant/dp/B00L32HXOA%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00L32HXOA' 
          },    
    {'id': '8',
        'title': 'Tatcha Beauty Essential Discovery Set',
        'image': 'http://ecx.images-amazon.com/images/I/31E5pnvbeFL._SL160_.jpg',
        'price': '$70.67',
        'url': 'http://www.amazon.com/Tatcha-Beauty-Essential-Discovery-Set/dp/B00ZQLL29G%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00ZQLL29G' 
          },    
    {'id': '9',
        'title': 'Tatcha Polished Classic Rice Enzyme Powder Deluxe Mini (.35 oz)',
        'image': 'http://ecx.images-amazon.com/images/I/319j%2BrOacML._SL160_.jpg',
        'price': '$22.00',
        'url': 'http://www.amazon.com/TATCHA-Polished-Classic-Enzyme-Powder/dp/B00W66LZPA%3FSubscriptionId%3DAKIAI6IJ2HVTJ4MH6V3A%26tag%3Dtatchachallen-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00W66LZPA' 
          },  
    {'id': '10',
        'title': 'More',
        'image': 'http://ddjax94hptnew.cloudfront.net/assets/images/more_results.png',
        'url': 'http://www.amazon.com/gp/search?keywords=tatcha&url=search-alias%3Daws-amazon-aps',

          },            
  ];


}