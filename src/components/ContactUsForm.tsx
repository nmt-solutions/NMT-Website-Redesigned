import FormButton from "./FormButton";
import { CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactUsForm = () => {
  return (
    <form>
      <CardHeader className="text-md font-bold">
        Get in touch & Subscribe to our news letter
      </CardHeader>
      <CardContent>
        <div className="text-sm font-semibold mb-4">
          Lets collaborate to expand your business
        </div>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <Input
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            required
          />
          <Input
            id="businessEmail"
            name="businessEmail"
            type="email"
            placeholder="Business Email"
            required
          />
          <Input id="phone" name="phone" placeholder="Phone" required />
          <Input id="country" name="country" placeholder="Country" required />
        </div>
        <Textarea
          id="needs"
          name="needs"
          placeholder="Tell us about your application/IoT needs..."
          className="mt-4"
          required
        />
        <div className="text-sm font-semibold mt-4">
          We never share your data.
        </div>
      </CardContent>
      <CardFooter>
        <FormButton
          label="Submit"
          className="w-full text-white"
          showSaveIcon={false}
        />
      </CardFooter>
    </form>
  );
};

export default ContactUsForm;
