<template>
  <form @submit.prevent='onSubmit' class="form">
    <fieldset class="form__container">
      <div class='form__itemContainer'>
        <label class='form__label' for="surname">Фамилия*</label>
        <input class='form__item' type="text" id="surname" v-model.trim='surname'
          :class='{form__inputError: ($v.surname.$dirty && !$v.surname.required)}'>
        <span class='form__error'
          v-if="$v.surname.$dirty && !$v.surname.required"
          :class='{form__errorActive: ($v.surname.$dirty && !$v.surname.required)}'
          >Поле Фамилия обязательное для заполнения!
        </span>
        <span class='form__error' 
          v-else-if="$v.surname.$dirty && !$v.surname.minLength"
          :class='{form__errorActive: ($v.surname.$dirty && !$v.surname.minLength)}'
          >Поле Фамилия должно иметь больше, чем {{$v.surname.$params.minLength.min}} символа
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="firstname">Имя*</label>
        <input  class='form__item' type="text" id="firstname" v-model.trim='firstname'
        :class='{form__inputError: ($v.firstname.$dirty && !$v.firstname.required)}'>
        <span class='form__error' v-if="$v.firstname.$dirty && !$v.firstname.required"
          :class='{form__errorActive: ($v.firstname.$dirty && !$v.firstname.required)}'
          >Поле Имя обязательное для заполнения!
        </span>
        <span class='form__error' 
          v-else-if="$v.firstname.$dirty && !$v.firstname.minLength"
          :class='{form__errorActive: ($v.firstname.$dirty && !$v.firstname.minLength)}'
          >Поле Имя должно иметь больше, чем {{$v.firstname.$params.minLength.min}} символа
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="lastname">Отчество</label>
        <input  class='form__item' type="text" id="lastname">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="date-of-birth">Дата Рождения*</label>
        <input  class='form__item' type="date" id="dateOfBirth" v-model.trim="dateOfBirth"
          :class='{form__inputError: ($v.dateOfBirth.$dirty && !$v.dateOfBirth.required)}'>
        <span class='form__error'
          v-if="$v.dateOfBirth.$dirty && !$v.dateOfBirth.required"
          :class='{form__errorActive: ($v.dateOfBirth.$dirty && !$v.dateOfBirth.required)}'
          >Поле Дата Рождения обязательно для заполнения!
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="phone">Номер телефона*</label>
        <input  class='form__item' type="tel" name="" id="phone" v-model.trim='phone'
          :class='{form__inputError: ($v.phone.$dirty && !$v.phone.required)}'>
        <span class='form__error' 
          v-if="$v.phone.$dirty && !$v.phone.required"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.required)}'
          >Поле Номер Телефона обязательно для заполнения!
        </span>
        <span class='form__error' 
          v-else-if="$v.phone.$dirty && !$v.phone.numeric"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.numeric)}'
          >Поле Номер Телефона должно состоять только из цифр!
        </span>
        <span class='form__error' 
          v-else-if="$v.phone.$dirty && !$v.phone.minLength"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.minLength)}'
          >Поле Номер Телефона должно иметь 11 цифр!
        </span>
        <span class='form__error' 
          v-else-if="$v.phone.$dirty && !$v.phone.maxLength"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.maxLength)}'
          >Поле Номер Телефона должно иметь 11 цифр!
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="gender">Пол</label>
        <input  class='form__item' type="text" name="" id="gender">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="clients">Группа клиентов*</label>
        <select class='form__select form__selectMultiple' size='3'
        multiple id="clients" v-model="selected"
        :class='{form__selectMultipleError: ($v.selected.$dirty && !$v.selected.required)}'>
          <option value="vip">VIP</option>
          <option value="problem">Проблемные</option>
          <option value="oms">ОМС</option>
      </select>
        <span class='form__error form__errorSelectMultiple'
          v-if="$v.selected.$dirty && !$v.selected.required"
          :class='{form__errorActive: ($v.selected.$dirty && !$v.selected.required)}'
          >Выберите обязательно хотя бы одно поле!
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="doctor">Лечащий врач</label>
        <select class='form__item form__selectMultiple' id="doctor">
          <option value="ivanov">Иванов</option>
          <option value="zakharova">Захаров</option>
          <option value="chernysheva">Чернышева</option>
      </select>
      </div>
      <div class='form__itemContainer form__itemCheckbox'>
        <label class='form__label' for="sms">Не отправлять СМС</label>
        <input class='form__item form__itemSms' type="checkbox" name="" id="sms">
      </div> 
    </fieldset>
    <fieldset class="form__container">
      <h3 class='form__item-header'>Адрес:</h3>
      <div class='form__itemContainer'>
        <label class='form__label' for="postnumber">Индекс</label>
        <input class='form__item' type="text" id="postnumber"
        v-model.trim="postindex"
        :class='{form__inputError: ($v.postindex.$dirty && !$v.postindex.numeric)}'
        >
        <span class='form__error' 
          v-if="$v.postindex.$dirty && !$v.postindex.numeric"
          :class='{form__errorActive: ($v.postindex.$dirty && !$v.postindex.numeric)}'
          >Поле Индекс должно состоять только из цифр!
        </span>
        <span class='form__error' 
          v-else-if="$v.postindex.$dirty && !$v.postindex.minLength"
          :class='{form__errorActive: ($v.postindex.$dirty && !$v.postindex.minLength)}'
          >Поле Индекс должно быть длиной в {{$v.postindex.$params.minLength.min}} символов!
        </span>
        <span class='form__error' 
          v-else-if="$v.postindex.$dirty && !$v.postindex.maxLength"
          :class='{form__errorActive: ($v.postindex.$dirty && !$v.postindex.maxLength)}'
          >Поле Индекс должно быть длиной в {{$v.postindex.$params.maxLength.max}} символов!
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="country">Страна</label>
        <input class='form__item' type="text" id="country">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="region">Область</label>
        <input class='form__item' type="text" id="region">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="city">Город*</label>
        <input class='form__item' type="text" id="city"
        v-model="city"
        :class='{form__inputError: ($v.city.$dirty && !$v.city.required)}'
        >
        <span class='form__error' 
          v-if="$v.city.$dirty && !$v.city.required"
          :class='{form__errorActive: ($v.city.$dirty && !$v.city.required)}'
          >Поле Город обязательно для заполнения!
        </span>
        <span class='form__error' 
          v-else-if="$v.city.$dirty && !$v.city.minLength"
          :class='{form__errorActive: ($v.city.$dirty && !$v.city.minLength)}'
          >Поле Город должно иметь хотя бы 1 букву
        </span>
        <span class='form__error' 
          v-else-if="$v.city.$dirty && !$v.city.alpha"
          :class='{form__errorActive: ($v.city.$dirty && !$v.city.alpha)}'
          >Поле Город должно состоять из букв
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="street">Улица</label>
        <input class='form__item' type="text" name="" id="street">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="house-number">Дом</label>
        <input class='form__item' type="text" name="" id="house-number">
      </div>
    </fieldset>
    <fieldset class="form__container">
      <h3 class='form__item-header'>Паспорт:</h3>
      <div class='form__itemContainer'>
        <label class='form__label' for="document">Тип документа*</label>
        <select class='form__select' id="document" v-model="typeOfDocument">
          <option value="passport">Паспорт</option>
          <option value="certificate-of-birth">Свидетельство о рождении</option>
          <option value="driver-license">Вод. удостоверение</option>
        </select>
        <span class='form__error' 
          v-if="$v.city.$dirty && !$v.city.required"
          :class='{form__errorActive: ($v.typeOfDocument.$dirty && !$v.typeOfDocument.required)}'
          >Выберите тип документа</span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="docs-series">Серия</label>
        <input class='form__item' type="text" name="" id="docs-series">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="docs-number">Номер</label>
        <input class='form__item' type="text" id="docs-number"
          v-model='documentNumber'
          :class='{form__inputError: ($v.documentNumber.$dirty &&
            !$v.documentNumber.numeric && !$v.documentNumber.minLength
            && !$v.documentNumber.maxLength)
          }'
        >
        <span class='form__error'
          v-if="$v.documentNumber.$dirty && !$v.documentNumber.numeric"
          :class='{form__errorActive: ($v.documentNumber.$dirty && !$v.documentNumber.numeric)}'
        >Поле Номер Документа должно состоять из цифр!
        </span>
        <span class='form__error'
          v-else-if="$v.documentNumber.$dirty && !$v.documentNumber.minLength"
          :class='{form__errorActive: ($v.documentNumber.$dirty && !$v.documentNumber.minLength)}'
        >Поле Номер Документа должно состоять {{$v.documentNumber.$params.minLength.min}} цифр!
        </span>
        <span class='form__error'
          v-else-if="$v.documentNumber.$dirty && !$v.documentNumber.maxLength"
          :class='{form__errorActive: ($v.documentNumber.$dirty && !$v.documentNumber.maxLength)}'
        >Поле Номер Документа должно состоять {{$v.documentNumber.$params.maxLength.max}} цифр!
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="docs-organization">Кем выдан</label>
        <input class='form__item' type="text" name="" id="docs-organization">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="date-of-issue">Дата выдачи*</label>
        <input class='form__item' type="date" name="" id="date-of-issue"
          v-model='dateOfIssue'
          :class='{form__inputError: ($v.dateOfIssue.$dirty && !$v.dateOfIssue.required)}'
        >
        <span class='form__error' 
          v-if="$v.dateOfIssue.$dirty && !$v.dateOfIssue.required"
          :class='{form__errorActive: ($v.dateOfIssue.$dirty && !$v.dateOfIssue.required)}'
        >Поле Дата Выдачи обязательно для заполнения!</span>
      </div>
    </fieldset>
    <button class="form__submit">Отправить</button>
    <span class='form__warning'>* Поле обязательное для заполнения.</span>
  </form>
</template>

<script>
import { required, minLength, numeric, maxLength, alpha } from 'vuelidate/lib/validators';

export default {
  data: () => ({
      surname: '',
      firstname: '',
      dateOfBirth: '',
      phone: '7',
      selected: [],
      postindex: '',
      city: '',
      typeOfDocument: '',
      documentNumber: '',
      dateOfIssue: '',
  }),
  validations: {
    surname: { required, minLength: minLength(2) },
    firstname: { required, minLength: minLength(2) },
    dateOfBirth: { required },
    phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
    selected: { required },
    postindex: { numeric, minLength: minLength(6), maxLength: maxLength(6)},
    city: { required, alpha, minLength: minLength(2) },
    typeOfDocument: { required },
    documentNumber: { numeric, minLength: minLength(6), maxLength: maxLength(6) },
    dateOfIssue: { required },
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return;
      }
    }
  }
}
</script>