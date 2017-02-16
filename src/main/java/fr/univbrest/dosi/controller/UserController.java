/**
 * 
 */
package fr.univbrest.dosi.controller;

import fr.univbrest.dosi.exceptions.SPIException;
import fr.univbrest.dosi.model.User;
import fr.univbrest.dosi.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Chobaz
 *
 *         16 févr. 2017
 */
@Api(value = "user", description = "Description de la ressource user.")
@RestController
public class UserController
{
	private UserService userService;

	@Autowired
	UserController(UserService userService)
	{
		this.userService = userService;
	}

	@ApiOperation(value = "", notes = "Permet d'authentifier un utilisateur en utilisant une requête POST.", response = void.class, tags = {})
	@RequestMapping(value = "/auth", method = RequestMethod.POST, headers = "Accept=application/json")
	public void authentifier(final HttpServletRequest request,
			@RequestBody final User user)
	{
		User connectedUser = userService.authentifier(user.getUsername(),
				user.getPassword());

		if (connectedUser != null)
			request.getSession().setAttribute("user", user);
		else
			throw new SPIException("Veuillez vérifier vos identifiants!");
	}

	@ApiOperation(value = "", notes = "Permet de récupérer les données d'un utilisateur connecté à partir de la session.", response = User.class, tags = {})
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public User getUser(final HttpServletRequest request/*
														 * , final
														 * HttpServletRequest
														 * response
														 */)
	{
		return (User) request.getSession().getAttribute("user");

		/*
		 * if (user != null) return user; else throw new SPIException(
		 * "Veuillez vous authentifier avant de poursuivre la navigation sur le site!"
		 * );
		 */
	}

	@ApiOperation(value = "", notes = "Permet de deconnecter un utilisateur en le supprimant de la session actuelle.", response = User.class, tags = {})
	@RequestMapping(value = "/disconnect", method = RequestMethod.GET)
	public void disconnect(final HttpServletRequest request)
	{
		request.getSession().removeAttribute("user");
	}

}
