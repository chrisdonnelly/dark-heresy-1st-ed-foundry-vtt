const {HTMLField, NumberField, SchemaField, StringField} = foundry.data.fields

class ActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            characteristics: new SchemaField({
                weaponSkill: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Weapon Skill" }),
                }),
                ballisticSkill: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: getSelection100, label: "Ballistic Skill" }),
                }),
                strength: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Strength" }),
                }),
                toughness: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Toughness" }),
                }),
                agility: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Agility" }),
                }),
                intelligence: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Intelligence" }),
                }),
                perception: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Perception" }),
                }),
                willpower: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Willpower" }),
                }),
                fellowship: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, max: 100, label: "Fellowship" }),
                }),
            })
        }
    }
}