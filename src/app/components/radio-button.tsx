import React from "react";
import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export function RadioVerticalList({ field, form, options }: any) {
  return (
    <Card>
      <List>
        {options.map((el: any, index: any) => {
          const uniqueId = `${field.name}-${el}-${index}`;

          return (
            <ListItem key={index} className="p-0 ">
              <label
                htmlFor={uniqueId}
                className="flex w-full cursor-pointer items-center px-3 py-2 "
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    id={uniqueId}
                    ripple={true}
                    checked={field.value === el}
                    onChange={() => form.setFieldValue(field.name, el)}
                    className="hover:before:opacity-0 "
                    containerProps={{
                      className: "p-0",
                    }}
                    crossOrigin={undefined}
                  />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="font-medium text-blue-gray-400 font-montserrat_Alternates"
                >
                  {el}
                </Typography>
              </label>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}
