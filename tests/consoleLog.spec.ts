import test,{expect} from '../fixtures/basePages';

test.describe('Console log errors', async () => {

    test('Page has nor errors or logs', async ({page}) => {

        //Man muss Page Object + Event Handler On einsetzen
        //As Any Field -> Ein Feld, wo man beliebige Datentype einsetzen kann
        const logs = [] as any;

        //Event Handler on -> es wird auf Console hören;
        page.on("console", (message) => {

            //Einfügen der Infos zu Logs; Message und Type der Message
            return logs.push({message, type: message.type()});
        })


        //Listener für Exceptions
        const errors = [] as any;
        page.on("pageerror", (exception) => {

            return errors.push(exception);
            })



            //0 console  messages, 0 errors/exceptions
        await page.goto('https://demoqa.com/');
        console.log(logs);
        expect.soft(logs.length).toBe(0);

        console.log(errors);
        expect(errors.length).toBe(0);

    })
})
