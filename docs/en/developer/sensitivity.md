# Frequency Response Issues and Remedies

According to feedback from some users, the first generation FlyDog SDR currently on sale has a flaw in the design of the antenna interfaces.

## Frequency Response Problem

The frequency response of the HF-1 and HF-2 interfaces has been checked separately using the NanoVNA and, as can be seen from the graph below, there is varying degrees of attenuation at some frequencies for HF-1 and HF-2.

The reason for the attenuation in some frequency ranges is the insufficient input capacitance on the HF-1 and HF-2 interfaces.

### HF-1

![HF-1](/developer/sensitivity_1.jpg "HF-1")

### HF-2

![HF-2](/developer/sensitivity_2.jpg "HF-2")

## Remediation

It should be noted that the following modifications to the equipment require a certain level of user competence and expertise, and that the HF-1 interface will no longer be available after the modifications described below.

The FlyDog SDR Project is not responsible for any damage to the FlyDog SDR expansion board caused by the user during the modification process.

### Remove the Metal Case

Remove the metal case (Emoji marked) corresponding to the HF-1 and HF-2 interfaces.

![Mental Case](/developer/sensitivity_3.jpg "Mental Case")

Melt the solder around the edges of the metal case of the FlyDog SDR using a soldering iron and slowly remove the cover.

![Circuit](/developer/sensitivity_4.jpg "Circuit")

During removal, take care not to damage other components.

### Modify the Circuit

![Modification](/developer/sensitivity_5.jpg "Modification")

Short C1, remove C2 and L1 according to the diagram above.

![Modified](/developer/sensitivity_6.jpg "Modified")

Be careful not to damage other components during the modification.

Once the modification is complete, the previous problem of attenuation at some frequencies can be solved.

![Changes](/developer/sensitivity_7.jpg "Changes")