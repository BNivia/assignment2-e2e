/*
 * Unit tests for lib/calculator.js
 */
describe ('Calculator', function(){
    beforeEach(function(){
        var calculator = 
            '<div id="calc" class="calculator">' +
                '<input id="display" type="text" class="display" disabled>' +
                '<div class="keys">' +
                '<div class="row">' +
                    '<button value="%" id="percent" class="operator">%</button>' +
                    '<button value="sqrt" id="sqrt" class="operator">√</button>' +
                '</div>' +
                '<div class="row">' +
                    '<button value="+/-" id="sign" class="operator">+/-</button>' +
                    '<button value="M+" id="Mp" class="operator">M+</button>' +
                    '<button value="M-" id="Ms" class="operator">M-</button>' +
                    '<button value="MRC" id="MRC" class="operator">M</button>' +
                '</div>' +
                    '<div class="row">' +
                        '<button value="7" id="seven">7</button>' +
                        '<button value="8" id="eight">8</button>' +
                        '<button value="9" id="nine">9</button>' +
                        '<button value="+" id="add" class="operator">+</button>' +
                    '</div>' +
                    '<div class="row">' +
                        '<button value="4" id="four">4</button>' +
                        '<button value="5" id="five">5</button>' +
                        '<button value="6" id="six">6</button>' +
                        '<button value="-" id="minus" class="operator">-</button>' +
                    '</div>' +
                    '<div class="row">' +
                        '<button value="1" id="one">1</button>' +
                        '<button value="2" id="two">2</button>' +
                        '<button value="3" id="three">3</button>' +
                        '<button value="*" id="times" class="operator">*</button>' +
                    '</div>' +
                    '<div class="row">' +
                        '<button value="C" id="clear" class="operator">C</button>' +
                        '<button value="0" id="zero">0</button>' +
                        '<button value="/" id="div" class="operator">/</button>' +
                        '<button value="=" id="equals" class="operator">=</button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        document.body.insertAdjacentHTML('afterbegin', calculator);
    });

    beforeEach(function(){
        startUpCalculator();
    });

    afterEach(function(){
        document.body.removeChild(document.getElementById('calc'));
    });

    afterEach(function(){
        mem = 0;
    });

    //Unit Tests - Existing Functionality 
    it('should display 56 for 56', function(){
        document.querySelector("#five").click();
        document.querySelector("#six").click()
        expect(document.getElementById('display').value).toBe('56');
    });

    it('should display 4 for 2+2=', function(){
        document.querySelector("#two").click();
        document.querySelector("#add").click();
        document.querySelector("#two").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('4');
    });

    it('should display -10 for -20+10=', function(){
        document.querySelector("#minus").click();
        document.querySelector("#two").click();
        document.querySelector("#zero").click();
        document.querySelector("#add").click();
        document.querySelector("#one").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('-10');
    });

    it('should display 9728 for 7562+5+9+100+52+2000=', function(){
        document.querySelector("#seven").click();
        document.querySelector("#five").click();
        document.querySelector("#six").click();
        document.querySelector("#two").click();
        document.querySelector("#add").click();
        document.querySelector("#five").click();
        document.querySelector("#add").click();
        document.querySelector("#nine").click();
        document.querySelector("#add").click();
        document.querySelector("#one").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#add").click();
        document.querySelector("#five").click();
        document.querySelector("#two").click();
        document.querySelector("#add").click();
        document.querySelector("#two").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('9728');
    });

    it('should display 1.000006e+31 for 1000000000000000000000000000000+60000000000000000000000000=', function(){
        document.querySelector("#one").click();
        for (let z=0; z<30; z++){
            document.querySelector("#zero").click();
        }
        document.querySelector("#add").click();
        document.querySelector("#six").click();
        for (let z=0; z<25; z++){
            document.querySelector("#zero").click();
        }
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('1.00006e+30');
    });

    it('should display 0 for 1000000-1000000=', function(){
        document.querySelector("#one").click();
        for (let z=0; z<6; z++){
            document.querySelector("#zero").click();
        }
        document.querySelector("#minus").click();
        document.querySelector("#one").click();
        for (let z=0; z<6; z++){
            document.querySelector("#zero").click();
        }
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('0');
    });

    it('should display 28 for 37-9=', function(){
        document.querySelector("#three").click();
        document.querySelector("#seven").click();
        document.querySelector("#minus").click();
        document.querySelector("#nine").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('28');
    });

    it('should display -46 for -37-9=', function(){
        document.querySelector("#minus").click();
        document.querySelector("#three").click();
        document.querySelector("#seven").click();
        document.querySelector("#minus").click();
        document.querySelector("#nine").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('-46');
    });

    it('should display -92 for 8-100=', function(){
        document.querySelector("#eight").click();
        document.querySelector("#minus").click();
        document.querySelector("#one").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('-92');
    });

    it('should display 4396 for 7562-5-9-100-52-3000=', function(){
        document.querySelector("#seven").click();
        document.querySelector("#five").click();
        document.querySelector("#six").click();
        document.querySelector("#two").click();
        document.querySelector("#minus").click();
        document.querySelector("#five").click();
        document.querySelector("#minus").click();
        document.querySelector("#nine").click();
        document.querySelector("#minus").click();
        document.querySelector("#one").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#minus").click();
        document.querySelector("#five").click();
        document.querySelector("#two").click();
        document.querySelector("#minus").click();
        document.querySelector("#three").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('4396');
    });

    it('should display 324 for 54*6=', function(){
        document.querySelector("#five").click();
        document.querySelector("#four").click();
        document.querySelector("#times").click();
        document.querySelector("#six").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('324');
    });

    it('should display -144 for 12*-12=', function(){
        document.querySelector("#one").click();
        document.querySelector("#two").click();
        document.querySelector("#times").click();
        document.querySelector("#minus").click();
        document.querySelector("#one").click();
        document.querySelector("#two").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('-144');
    });

    it('should display 0 for 0*0=', function(){
        document.querySelector("#zero").click();
        document.querySelector("#times").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('0');
    });

    it('should display 0 for 65218*0=', function(){
        document.querySelector("#six").click();
        document.querySelector("#five").click();
        document.querySelector("#two").click();
        document.querySelector("#one").click();
        document.querySelector("#eight").click();
        document.querySelector("#times").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('0');
    });

    it('should display -72210000 for 1245000*-58=', function(){
        document.querySelector("#one").click();
        document.querySelector("#two").click();
        document.querySelector("#four").click();
        document.querySelector("#five").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#times").click();
        document.querySelector("#minus").click();
        document.querySelector("#five").click();
        document.querySelector("#eight").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('-72210000');
    });

    it('should display 32 for 96/3=', function(){
        document.querySelector("#nine").click();
        document.querySelector("#six").click();
        document.querySelector("#div").click();
        document.querySelector("#three").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('32');
    });

    it('should display NaN for 0/0=', function(){
        document.querySelector("#zero").click();
        document.querySelector("#div").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('NaN');
    });

    it('should display Infinity for 523/0=', function(){
        document.querySelector("#five").click();
        document.querySelector("#two").click();
        document.querySelector("#three").click();
        document.querySelector("#div").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('Infinity');
    });

    it('should display -6.25 for -25/4=', function(){
        document.querySelector("#minus").click();
        document.querySelector("#two").click();
        document.querySelector("#five").click();
        document.querySelector("#div").click();
        document.querySelector("#four").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('-6.25');
    });

    it('should display 10 for 100/2/5=', function(){
        document.querySelector("#one").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#div").click();
        document.querySelector("#two").click();
        document.querySelector("#div").click();
        document.querySelector("#five").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('10');
    });

    it('should display 48 for 8+6*7-2/1=', function(){
        document.querySelector("#eight").click();
        document.querySelector("#add").click();
        document.querySelector("#six").click();
        document.querySelector("#times").click();
        document.querySelector("#seven").click();
        document.querySelector("#minus").click();
        document.querySelector("#two").click();
        document.querySelector("#div").click();
        document.querySelector("#one").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('48');
    });

    it('should display nothing for 5+789 then C', function(){
        document.querySelector("#five").click();
        document.querySelector("#add").click();
        document.querySelector("#seven").click();
        document.querySelector("#eight").click();
        document.querySelector("#nine").click();
        document.querySelector("#clear").click();
        expect(document.getElementById('display').value).toBe('');
    });

    it('should display -Infinity for 523/0=', function(){
        document.querySelector("#five").click();
        document.querySelector("#two").click();
        document.querySelector("#three").click();
        document.querySelector("#div").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        document.querySelector("#times").click();
        document.querySelector("#minus").click();
        document.querySelector("#one").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('-Infinity');
    });

    //Starter code did not handle double input of operators #resolved
    it('should display 4 for 4+-', function(){
        document.querySelector("#four").click();
        document.querySelector("#add").click();
        document.querySelector("#minus").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('Err');
    });

    //Unit Tests - New Functionality 
    //console.log(document.querySelector("#display").value);
    it('should display -63 for 63 then pressing +/-', function(){
        document.querySelector("#minus").click();
        document.querySelector("#six").click();
        document.querySelector("#three").click();
        document.querySelector("#sign").click();
        expect(document.getElementById('display').value).toBe('63');
    });

    it('should display 700 for -700 then pressing +/-', function(){
        document.querySelector("#seven").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#sign").click();
        expect(document.getElementById('display').value).toBe('-700');
    });

    it('should display 0 for 0 then pressing +/-', function(){
        document.querySelector("#zero").click();
        document.querySelector("#sign").click();
        expect(document.getElementById('display').value).toBe('0');
    });

    it('should display 0.98 for 98 then pressing %', function(){
        document.querySelector("#nine").click();
        document.querySelector("#eight").click();
        document.querySelector("#percent").click();
        expect(document.getElementById('display').value).toBe('0.98');
    });

    it('should display -0.23 for -23 then pressing %', function(){
        document.querySelector("#minus").click();
        document.querySelector("#two").click();
        document.querySelector("#three").click();
        document.querySelector("#percent").click();
        expect(document.getElementById('display').value).toBe('-0.23');
    });

    it('should display 15 for 1500 then pressing %', function(){
        document.querySelector("#one").click();
        document.querySelector("#five").click();
        document.querySelector("#zero").click();
        document.querySelector("#zero").click();
        document.querySelector("#percent").click();
        expect(document.getElementById('display').value).toBe('15');
    });

    it('should display 0 for 0 then pressing %', function(){
        document.querySelector("#zero").click();
        document.querySelector("#percent").click();
        expect(document.getElementById('display').value).toBe('0');
    });

    it('should display NaN for 66* then pressing %', function(){
        document.querySelector("#six").click();
        document.querySelector("#six").click();
        document.querySelector("#times").click();
        document.querySelector("#percent").click();
        expect(document.getElementById('display').value).toBe('NaN');
    });

    it('should display 1.6 for adding 1 to the percent of 2*8=', function(){
        document.querySelector("#two").click();
        document.querySelector("#times").click();
        document.querySelector("#eight").click();
        document.querySelector("#equals").click();
        document.querySelector("#percent").click();
        document.querySelector("#add").click();
        document.querySelector("#one").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('1.16');
    });

    it('should display 3 for 9 then pressing √', function(){
        document.querySelector("#nine").click();
        document.querySelector("#sqrt").click();
        expect(document.getElementById('display').value).toBe('3');
    });

    it('should display 8.831760866327848 for 78 then pressing √', function(){
        document.querySelector("#seven").click();
        document.querySelector("#eight").click();
        document.querySelector("#sqrt").click();
        expect(document.getElementById('display').value).toBe('8.831760866327848');
    });

    it('should display NaN for -16 then pressing √', function(){
        document.querySelector("#minus").click();
        document.querySelector("#one").click();
        document.querySelector("#six").click();
        document.querySelector("#sqrt").click();
        expect(document.getElementById('display').value).toBe('NaN');
    });

    it('should display 0 for 0 then pressing √', function(){
        document.querySelector("#zero").click();
        document.querySelector("#sqrt").click();
        expect(document.getElementById('display').value).toBe('0');
    });

    it('should display 85 for 25 then pressing √ then +80=', function(){
        document.querySelector("#two").click();
        document.querySelector("#five").click();
        document.querySelector("#sqrt").click();
        document.querySelector("#add").click();
        document.querySelector("#eight").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('85');
    });

    it('should display NaN for 890321/ then pressing √', function(){
        document.querySelector("#eight").click();
        document.querySelector("#nine").click();
        document.querySelector("#zero").click();
        document.querySelector("#three").click();
        document.querySelector("#two").click();
        document.querySelector("#one").click();
        document.querySelector("#add").click();
        document.querySelector("#sqrt").click();
        expect(document.getElementById('display').value).toBe('NaN');
    });

    it('should display 9 for MRC when 9 is added to M', function(){
        document.querySelector("#nine").click();
        document.querySelector("#Mp").click();
        document.querySelector("#MRC").click();
        expect(document.getElementById('display').value).toBe('9');
    });

    it('should display 490 for 492 in M then M- 2', function(){
        document.querySelector("#four").click();
        document.querySelector("#nine").click();
        document.querySelector("#two").click();
        document.querySelector("#Mp").click();
        document.querySelector("#clear").click();
        document.querySelector("#two").click();
        document.querySelector("#Ms").click();
        document.querySelector("#MRC").click();
        expect(document.getElementById('display').value).toBe('490');
    });

    it('should display -28 for 322 in MRC Mp -350', function(){
        document.querySelector("#three").click();
        document.querySelector("#two").click();
        document.querySelector("#two").click();
        document.querySelector("#Mp").click();
        document.querySelector("#clear").click();
        document.querySelector("#minus").click();
        document.querySelector("#three").click();
        document.querySelector("#five").click();
        document.querySelector("#zero").click();
        document.querySelector("#Mp").click();
        document.querySelector("#MRC").click();
        expect(document.getElementById('display').value).toBe('-28');
    });

    it('should display 80 for 80 in MRC Ms 0', function(){
        document.querySelector("#eight").click();
        document.querySelector("#zero").click();
        document.querySelector("#Mp").click();
        document.querySelector("#clear").click();
        document.querySelector("#zero").click();
        document.querySelector("#Ms").click();
        document.querySelector("#MRC").click();
        expect(document.getElementById('display').value).toBe('80');
    });

    it('should display NaN for trying to add number to NaN in MRC', function(){
        document.querySelector("#zero").click();
        document.querySelector("#div").click();
        document.querySelector("#zero").click();
        document.querySelector("#equals").click();
        document.querySelector("#Mp").click();
        document.querySelector("#MRC").click();
        document.querySelector("#add").click();
        document.querySelector("#eight").click();
        document.querySelector("#equals").click();
        expect(document.getElementById('display').value).toBe('NaN');
    });
    //testing dblclick of MRC??
});