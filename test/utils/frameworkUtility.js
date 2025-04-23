
import expect from 'expect'
class frameworkUtility{
    async registertobeEqualWithMessageExpect(){
        expect.extend({toEqualWithMessage(received, expected, custom) {
            let pass = true;
            let message = '';
            try {
              // use the method from Jest that you want to extend
              // in a try block
              expect(received).toEqual(expected);
            } catch (e) {
              pass = false;
              message = `${e}\nCustom Message: ${custom}`;
            }
            return {
              pass,
              message: () => message, expected, received
            };
        }})
    }
}
export default new frameworkUtility()