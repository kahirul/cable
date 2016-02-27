export class ActionCable {

    createConsumer(url: string) : string {
        if (url === null) {
            url = "/cable";
        }

        return url;
    }
}
